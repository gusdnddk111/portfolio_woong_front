import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, getState } from '../state/mainSlice';
import ContentsHeader from './ContentsHeader';

const Projects = () => {


    return (
        <>
            <div className="BaseContainer" style={{height:"3000px"}}>
                <div className="LeftOffset"/>
                <div className="VerticalLine"/>
                <div className="RightContainer">
                    <ContentsHeader contents="Timeline"/>
                    <div className="Contents">
                        sdfsddd
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;