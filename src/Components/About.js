import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, getState } from '../state/mainSlice';
import AboutCss from '../CSS/About.css';
import CommonCss from '../CSS/Common.css';
import ContentsHeader from './ContentsHeader'

const About = () => {


    return (
        <>
            <div className="AboutContainer">
                <div className="LeftOffset"/>
                <div className="VerticalLine"/>
                <div className="RightContainer">
                    <ContentsHeader contents="AboutMe"/>
                    <div classNmae="Contents">
                        asdfasdfasdf
                        <span>안녕하세오 ~~</span>
                        <br/>
                        <span>슈가 아유미에요 ~~</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;