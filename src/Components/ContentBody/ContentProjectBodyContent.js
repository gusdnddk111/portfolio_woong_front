import React from 'react';
import '../../CSS/ContentProject.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react'

const ContentProjectBodyContent = (props) => {
    const depth = props.depth;
    const iconName = props.iconName;
    const content = props.content;
    const style = props.style;
    
    return (
        <div className={"ContentProjectBodySentence SentenceDepth" + depth}>
            {iconName  && <Icon style={{float:"left", marginRight:"8px"}} name={iconName}/>}
            <span style={{float:"left", ...style}}> {content} </span>
        </div>
    );
}

export default ContentProjectBodyContent;

