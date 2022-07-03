import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Label} from 'semantic-ui-react';

import '../../CSS/PortfolioProject.css';

const ProjectHeader = (props) => {
    const ribbon = props.ribbon;
    const title = props.title;
    const subTitle = props.subTitle;
    const githubAddress = props.githubAddress;

    //TODO github icon and href
    return (
        <div className="ProjectHeaderContainer">
            { ribbon &&
            <Label as='a' color='yellow' ribbon>
                <span style={{color:"#fbbd08", fontSize:"8px"}}>ㅤ</span>
            </Label>
            }
            <span className="ProjectHeaderTitle">{title}</span>
            {subTitle && <span className="ProjectHeaderSubTitle"> {subTitle} </span>}
        </div>
    );
}

export default ProjectHeader;

