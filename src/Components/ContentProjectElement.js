import React, { useState, useRef, useEffect } from 'react';
import '../CSS/ContentProject.css';
import '../CSS/Common.css';
import ContentProjectHeader from './ContentProjectHeader';
import ContentProjectBody from './ContentProjectBody';

const ContentProjectElement = (props) => {
    const dropdown = props.dropdown ? props.dropdown : false;
    
    const imgRef = useRef(null);
    const bodyRef = useRef(null);
    const [isDropdowned, setIsDropdowned] = useState(true);

    const onClick = () => {
        console.log(dropdown)
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
                imgRef.current.style.transform = "0deg";
            }else{
                imgRef.current.style.transform = "90deg";
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
            <ContentProjectBody id={props.id}/> 
        </>
    );
}

export default ContentProjectElement;