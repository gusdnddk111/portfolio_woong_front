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
    const contentStyle = props.contentStyle;
    const tagColor = props.tagColor;

    return (
        <div className={"ContentProjectBodySentence SentenceDepth" + depth}>
            {iconName  && <Icon style={{float:"left", marginRight:"8px"}} name={iconName}/>}
            {content && <span style={{float:"left", ...contentStyle}}> {content} </span>}
            {subContent && <span style={{float:"left", fontSize:"11px", marginTop:"2px", marginLeft:"4px"}}>{subContent}</span>}
            {tags && tags.map((tag) => <Label style={{ fontSize:"11px", padding:"4px 8px", marginRight:"8px"}} as='a' color={tagColor} horizontal={true} children={tag}/>)}
        </div>
    );
}

export default ContentProjectBodyContent;

