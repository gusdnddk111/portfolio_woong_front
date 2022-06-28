import React from 'react';
import '../../CSS/ContentProject.css';
import '../../CSS/Common.css';
import ContentProjectElement from './ContentProjectElement';

const ProjectsMain = () => {

    return (
        <> 
            <div className="ProjectContainer">
                <div className='TimeLine'/>
                <ContentProjectElement 
                    id="company1" 
                    title="SK C&C" 
                    subTitle="( 2018.01 ~ )" 
                    dropdown={true}
                />
                <ContentProjectElement 
                    id="university" 
                    title="아주대학교" 
                    subTitle="( 2012.03 ~ 2018.02 )" 
                    dropdown={true}
                />
            </div>
        </>
    );
}

export default ProjectsMain;