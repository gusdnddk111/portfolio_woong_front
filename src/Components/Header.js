import React, { useEffect, useState, useRef  } from 'react';
import SuperEllipse from "react-superellipse";
import profileImage from '../image/profileImage.jfif';
import ProfileContact from './ProfileContact'
import HeaderCss from '../CSS/Header.css';
import CommonCss from '../CSS/Common.css';
import Typing from 'react-kr-typing-anim';
import TypeMe, { Delete } from 'react-typeme';
import phoneIcon from '../image/phoneCall.png';
import mailIcon from '../image/mail.png';
import githubIcon from '../image/github.png';

const Header = () => {
    const [isErase, setIsErase] = useState(false);
    const [isNameEnd, setIsNameEnd] = useState(false);
    const [isJobEnd, setIsJobEnd] = useState(false);
    const [profileContactClassName, setProfileContactClassName] = useState("ProfileContactHide");
    
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
                            조현웅
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
                            SK C&C 데이터 엔지니어
                        </Typing>
                        }
                    </div>
                    <div className={profileContactClassName} ref={profileContact}>
                        <ProfileContact image={phoneIcon} content={'010-3549-9453'}/>
                        <ProfileContact image={mailIcon} content={'gusdnddk111@gmail.com'}/>
                        <ProfileContact image={githubIcon} content={'https://github.com/gusdnddk111'}/>    
                    </div>
                </div>
            </div> 
            <SuperEllipse className="profileImageContainer" r1={0.14} r2={0.5}>
                <img className="profileImage" src={profileImage}/>
            </SuperEllipse>
        </>
    );
}

export default Header;