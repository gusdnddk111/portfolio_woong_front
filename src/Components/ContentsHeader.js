import React, { useEffect, useState } from 'react';
import AboutCss from '../CSS/About.css';
import CommonCss from '../CSS/Common.css';

const ContentsHeader = (props) => {
    const contents = props.contents

    return (
        <div className="ContentsHeaderContainer">
            <div className="TitleHeader"/>
            <div className="Title">
                <span className="TitleHeaderContentsFirst">{contents.substr(0,1)}</span>
                <span className="TitleHeaderContentsLast">{contents.substr(1,contents.length)}</span>
            </div>
        </div>
    );
}

export default ContentsHeader;