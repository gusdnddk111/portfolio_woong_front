import React from 'react';
import HeaderMain from './Header/HeaderMain';
import ContentProject from './ContentBody/ContentProject';
import BaseLayout from './BaseLayout';
import ContentAbout from './ContentAbout/ContentAbout';

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
