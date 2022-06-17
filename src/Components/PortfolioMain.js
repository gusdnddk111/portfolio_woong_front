import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, getState } from '../state/mainSlice';
import Header from './Header';
import About from './About';
import Projects from './Projects';

const PortfolioMain = () => {
  const count = useSelector((state) => getState(state).value);
  const dispatch = useDispatch();

  return (
    <>
      <Header/>
      <About/>
      <Projects/>
    </>
  );
}

export default PortfolioMain;
