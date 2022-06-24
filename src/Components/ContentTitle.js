import React from 'react';
import '../CSS/Common.css';

const TitleHeader = (props) => {
    const content = props.content;

    return (
        <div className="TitleHeaderContainer">
            <div className="TitleHeader"/>
            <div className="Title">
                <span className="TitleHeaderContentsFirst">{content?.substr(0,1)}</span>
                <span className="TitleHeaderContentsLast">{content?.substr(1,content.length)}</span>
            </div>
        </div>
    );
}

export default TitleHeader;