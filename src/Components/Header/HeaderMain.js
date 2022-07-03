import React, { useEffect, useState, useRef  } from 'react';
import { useSelector } from 'react-redux'
import { getState } from '../../state/mainSlice';

import SuperEllipse from "react-superellipse";
import profileImage from '../../image/profileImage.jfif';
import HeaderProfileContact from './HeaderProfileContact'
import '../../CSS/Header.css';
import '../../CSS/Common.css';
import Typing from 'react-kr-typing-anim';
import TypeMe, { Delete } from 'react-typeme';
import phoneIcon from '../../image/phoneCall.png';
import mailIcon from '../../image/mail.png';
import githubIcon from '../../image/github.png';
//getPersonInfo

const HeaderMain = () => {
    const [isErase, setIsErase] = useState(false);
    const [isNameEnd, setIsNameEnd] = useState(false);
    const [isJobEnd, setIsJobEnd] = useState(false);
    const [profileContactClassName, setProfileContactClassName] = useState("ProfileContactHide");
    const personInfo = useSelector((state)=>getState(state).personInfo);
    const profileContact = useRef(null);
    

    useEffect(() => {
        if(isJobEnd){
            setProfileContactClassName("ProfileContact");
        }
    }, [isJobEnd])


    return (
        <> 
            <div className="HeaderContainer" style={{height:'400px'}}>
                <div className="LeftOffset"/>
                { personInfo &&
                <div className="RightContainer">
                    <div className='ProfileName'>
                        {!isErase ? 
                        <TypeMe
                            strings={["whg", <Delete characters={3}/>]}
                            typingSpeed={300}
                            deleteSpeed={400}
                            backspaceDelay={100}
                            onAnimationEnd={()=>setIsErase(true)}/>
                        :
                        <Typing
                            Tag='span'
                            preDelay={100}
                            postDelay={0}
                            cursor
                            fixedWidth={false}
                            onDone={() => setIsNameEnd(true)}>
                            {personInfo.NAME_KOR}
                        </Typing>
                        }
                    </div>
                    <div className="ProfileJob">
                        {isNameEnd &&
                        <Typing
                            Tag='span'
                            preDelay={100}
                            postDelay={100}
                            speed={40}
                            cursor
                            fixedWidth={false}
                            onDone={() => setIsJobEnd(true)}>
                            {personInfo.JOB}
                        </Typing>
                        }
                    </div>
                    <div className={profileContactClassName} ref={profileContact}>
                        <HeaderProfileContact image={phoneIcon} content={personInfo.PHONE_NUMBER}/>
                        <HeaderProfileContact image={mailIcon} content={personInfo.EMAIL_ADDRESS}/>
                        <HeaderProfileContact image={githubIcon} content={personInfo.GITHUB_ADDRESS}/>    
                    </div>
                </div>
                }
            </div> 
            <SuperEllipse className="profileImageContainer" r1={0.14} r2={0.5}>
                <img className="profileImage" src={profileImage} alt=""/>
            </SuperEllipse>
        </>
    );
}

export default HeaderMain;