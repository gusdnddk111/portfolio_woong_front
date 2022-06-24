import React from 'react';
import HeaderMain from './HeaderMain';
import ContentProject from './ContentProject';
import BaseLayout from './BaseLayout';
import ContentAbout from './ContentAbout';

const PortfolioMain = () => {
  
  return (
    <>
      <HeaderMain/>
      <BaseLayout title="About Me" contents={<ContentAbout/>}/>
      <BaseLayout title="ccccc" contents={<ContentProject/>}/>
      
    </>
  );
}

export default PortfolioMain;
