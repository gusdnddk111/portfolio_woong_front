import React, { useEffect, useState } from 'react';
import AboutCss from '../CSS/About.css';
import CommonCss from '../CSS/Common.css';

const ContentsHeader = (props) => {
    const contents = props.contents

    return (
        <div className="ContentsHeaderContainer">
            <div className="TitleHeader"/>
            <div className="Title">
                <span style={{color:'#d81b1b', fontSize:'70px'}}>{contents.substr(0,1)}</span>
                <span style={{color:'#494040', paddingTop:'20px', fontSize:'40px'}}>{contents.substr(1,contents.length)}</span>
            </div>
        </div>
    );
}

export default ContentsHeader;