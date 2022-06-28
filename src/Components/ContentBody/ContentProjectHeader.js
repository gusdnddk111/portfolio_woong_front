import React from 'react';
import '../../CSS/ContentProject.css';
import dropdownImage from '../../image/down-chevron.png';

const ProjectsContentHeader = (props) => {
    const title = props.title;
    const subTitle = props.subTitle;
    const dropdown = props.dropdown ? props.dropdown : false; 

    return (
        <div className='ContentHeaderContainer'>
            <div className="ContentHeaderIcon"/>
            <div className="ContentHeaderTitle" onClick={props.onClick}>
                <span>{title}</span>
            </div>
            {subTitle &&
            <div className="ContentHeaderSubTitle" onClick={props.onClick}>
                <span>{subTitle}</span>
            </div>
            }
            {dropdown && 
            <img className="ContentHeaderDropdownIcon" src={dropdownImage} alt="" ref={props.imgRef} onClick={props.onClick}/>
            }
        </div>
    );
}

export default ProjectsContentHeader;