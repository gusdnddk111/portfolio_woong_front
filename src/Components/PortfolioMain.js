import React from 'react';
import HeaderMain from './HeaderMain';
import ProjectsMain from './ProjectsMain';
import BaseLayout from './BaseLayout';
import AboutMain from './AboutMain';

const PortfolioMain = () => {
  
  return (
    <>
      <HeaderMain/>
      <BaseLayout title="About Me" contents={<AboutMain/>}/>
      <BaseLayout title="ccccc" contents={<ProjectsMain/>}/>
      
    </>
  );
}

export default PortfolioMain;
