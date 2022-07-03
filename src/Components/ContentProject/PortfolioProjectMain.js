import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actions, getState} from '../../state/mainSlice';

import '../../CSS/PortfolioProject.css';
import '../../CSS/Common.css';
import CompanyContainer from './CompanyContainer';


const PortfolioProjectMain = () => {
    const dispatch = useDispatch();
    const personId = useSelector((state)=>getState(state).personId);
    const companyInfo = useSelector((state)=>getState(state).companyInfo);

    return (
        <> 
        {companyInfo &&
            <div className="ProjectMainContainer">
                <div className='TimeLine'/>
                {companyInfo.map((company)=> 
                <div key={company.COMPANY_ID}> 
                    <CompanyContainer 
                        companyId={company.COMPANY_ID} 
                        title={company.COMPANY_NAME}
                        subTitle={"(" + company.COMPANY_DATE + ")"}
                    />
                </div>
                )}
            </div>
        }
        </>
    );
}

export default PortfolioProjectMain;