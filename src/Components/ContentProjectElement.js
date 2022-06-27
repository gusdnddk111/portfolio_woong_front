import React, { useState, useRef, useEffect } from 'react';
import '../CSS/ContentProject.css';
import '../CSS/Common.css';
import ContentProjectHeader from './ContentProjectHeader';
import ContentProjectBody from './ContentProjectBody';

const ContentProjectElement = (props) => {
    const dropdown = props.dropdown ? props.dropdown : false;
    const dropdownAnimDelay = ".5s";
    const imgRef = useRef(null);
    const bodyRef = useRef(null);
    const [isDropdowned, setIsDropdowned] = useState(true);

    const onClick = () => {
        if(dropdown){
            if(isDropdowned){
                setIsDropdowned(false);
            }else{
                setIsDropdowned(true);
            }
        }
    }

    useEffect(() => {
        if(dropdown){
            if(isDropdowned){
                imgRef.current.style.transform = "scaleY(1)";
                bodyRef.current.style.padding="15px 15px"
                bodyRef.current.style.maxHeight= "1500px";
                bodyRef.current.style.transition="max-height " + dropdownAnimDelay + " ease-in-out, padding .5s ease-in-out";
            }else{
                imgRef.current.style.transform = "scaleY(-1)";
                bodyRef.current.style.padding="0px 15px";
                bodyRef.current.style.maxHeight="0px";
                bodyRef.current.style.transition="max-height " + dropdownAnimDelay + " ease-in-out, padding .5s ease-in-out";
            }
        }
    }, [isDropdowned])

    return (
        <> 
            <ContentProjectHeader 
                id={props.id} 
                title={props.title} 
                subTitle={props.subTitle} 
                dropdown={dropdown} 
                imgRef={imgRef}
                onClick={onClick}
            />
            <ContentProjectBody id={props.id} bodyRef={bodyRef}/> 
        </>
    );
}

export default ContentProjectElement;