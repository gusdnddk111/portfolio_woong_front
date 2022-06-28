import React from 'react';
import '../../CSS/ContentProject.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Label } from 'semantic-ui-react'

const ContentProjectBodyContent = (props) => {
    const depth = props.depth;
    const iconName = props.iconName;
    const content = props.content;
    const subContent = props.subContent;
    const tags = props.tags;
    const style = props.style;
    
    return (
        <div className={"ContentProjectBodySentence SentenceDepth" + depth}>
            {iconName  && <Icon style={{float:"left", marginRight:"8px"}} name={iconName}/>}
            {content && <span style={{float:"left", ...style}}> {content} </span>}
            {subContent && <span style={{float:"left", fontSize:"11px", marginTop:"2px", marginLeft:"4px"}}>{subContent}</span>}
            {tags && 
                tags.map((tag) => <Label style={{ fontSize:"11px", float:"left", padding:"4px 8px", marginRight:"8px"}} as='a' color="blue">
                                    {tag}
                                  </Label>
                        )}
        </div>
    );
}

export default ContentProjectBodyContent;

