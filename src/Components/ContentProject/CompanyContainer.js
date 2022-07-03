import 'semantic-ui-css/semantic.min.css';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getState, actions } from '../../state/mainSlice';

import '../../CSS/PortfolioProject.css';
import '../../CSS/Common.css';
import CompanyHeader from './CompanyHeader';
import CompanyBody from './CompanyBody';


const CompanyContainer = (props) => {
    const dispatch = useDispatch();

    const dropdownAnimDelay = "1s";
    const imgRef = useRef(null);
    const bodyRef = useRef(null);
    const [dropdownPossible, setDropdownPossible] = useState(false);
    const [isDropdowned, setIsDropdowned] = useState(false);
    const [projectInfoByCompany, setProjectInfoByCompany] = useState([]);

    const projectInfo = useSelector((state)=>getState(state).projectInfo);
    const personId = useSelector((state)=>getState(state).personId);
    const companyId = props.companyId;

    useEffect(() => {
        if(dropdownPossible){
            if(isDropdowned){
                imgRef.current.style.transform = "scaleY(1)";
                bodyRef.current.style.maxHeight= "5000px";
                bodyRef.current.style.transition="max-height " + dropdownAnimDelay + " ease-in-out";
            }else{
                imgRef.current.style.transform = "scaleY(-1)";
                bodyRef.current.style.maxHeight="0px";
                bodyRef.current.style.transition="max-height " + dropdownAnimDelay + " ease-in-out";
            }
        }
    }, [dropdownPossible, isDropdowned])

    useEffect(() => {
        if(projectInfo){
            setProjectInfoByCompany(projectInfo?.filter((project)=>project.COMPANY_ID===companyId && project.PROJECT_ID));
        }
    }, [projectInfo])

    useEffect(() => {
        if(projectInfoByCompany.length>0){
            setDropdownPossible(true);
            setIsDropdowned(true);
        }
    }, [projectInfoByCompany])
    
    
    return (
        <> 
            <CompanyHeader 
                title={props.title} 
                subTitle={props.subTitle} 
                dropdown={dropdownPossible} 
                imgRef={imgRef}
                onClick={()=>{dropdownPossible && (setIsDropdowned(!isDropdowned))}}
            />
            {
            projectInfoByCompany.length>0 &&
            <CompanyBody projectInfo={projectInfoByCompany} bodyRef={bodyRef} dropdown={dropdownPossible}/>
            }
        </>
    );
}

export default CompanyContainer;