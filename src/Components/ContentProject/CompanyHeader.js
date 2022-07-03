import React from 'react';

import '../../CSS/PortfolioProject.css';
import dropdownImage from '../../image/down-chevron.png';

const CompanyHeader = (props) => {
    const title = props.title;
    const subTitle = props.subTitle;
    const dropdown = props.dropdown ? props.dropdown : false; 

    return (
        <div className='ComapnyHeaderContainer'>
            <div className="CompanyHeaderIcon"/>
            <div className="CompanyHeaderTitle" onClick={props.onClick}>
                <span>{title}</span>
            </div>
            {subTitle &&
            <div className="CompanyHeaderSubTitle" onClick={props.onClick}>
                <span>{subTitle}</span>
            </div>
            }
            {dropdown && 
            <img className="CompanyHeaderDropdownIcon" src={dropdownImage} alt="" ref={props.imgRef} onClick={props.onClick}/>
            }
        </div>
    );
}

export default CompanyHeader;