import React from 'react';
import '../../CSS/ContentProject.css';
import 'semantic-ui-css/semantic.min.css';
import { Label} from 'semantic-ui-react'

const ContentProjectBodyTitle = (props) => {
    const ribbon = props.ribbon;
    const title = props.title;
    const subTitle = props.subTitle;
 
    return (
        <div style={{marginTop:"8px"}}>
            { ribbon &&
            <Label as='a' color='yellow' ribbon>
                <span style={{color:"#fbbd08", fontSize:"8px"}}>ㅤ</span>
            </Label>
            }
            <span className="ContentProjectBodyTitle">{title}</span>
            {subTitle && <span className="ContentProjectBodySubTitle"> {subTitle} </span>}
        </div>
    );
}

export default ContentProjectBodyTitle;

