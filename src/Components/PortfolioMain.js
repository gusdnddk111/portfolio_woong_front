import React, { useEffect } from 'react';
import HeaderMain from './Header/HeaderMain';
import PortfolioProjectMain from './ContentProject/PortfolioProjectMain';
import BaseLayout from './BaseLayout';
import ContentAbout from './ContentAbout/ContentAbout';
import { useSelector, useDispatch } from 'react-redux'
import { actions, getState} from '../state/mainSlice';

const PortfolioMain = () => {
  const dispatch = useDispatch();
  const personId = useSelector((state)=>getState(state).personId);
  
  useEffect(() => {
    dispatch(actions.getPersonInfo({personId:personId}))
  }, [])

  return (
    <>
      <HeaderMain/>
      <BaseLayout title="About Me" contents={<ContentAbout/>}/>
      <BaseLayout title="ccccc" contents={<PortfolioProjectMain/>}/>
      <BaseLayout contents={<></>}/>
    </>
  );
}

export default PortfolioMain;
