import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { actions, getState} from '../../state/mainSlice';

import '../../CSS/PortfolioProject.css';

const ProjectBodyContent = (props) => {
    const dispatch = useDispatch();

    const depth = props.depth;
    const iconName = props.iconName;
    const content = props.content;
    const subContent = props.subContent;
    const tag = props.tag;
    const subTags = props.subTags;
    const contentStyle = props.contentStyle;
    const tags = props.tags;
    let tags2 = []

    return (
        <div className={"ProjectBodyContentContainer SentenceDepth" + depth}>
            {iconName  && <Icon style={{float:"left", marginRight:"8px"}} name={iconName}/>}
            {content && <span style={{float:"left", ...contentStyle}}> {content} </span>}
            {subContent && <span style={{float:"left", fontSize:"11px", marginTop:"2px", marginLeft:"4px"}}>{subContent}</span>}
            {tags &&
            tags.map((item)=>
            <div key={item.main}>
                <Label style={{float:"left", fontSize:"11px", padding:"4px 8px", width:'70px', marginLeft:"16px"}} color="blue" horizontal={true} children={item.main}/>
                {item.sub?.map((subTag)=>
                    <Label style={{float:"left", fontWeight:"1000", padding:"4px 12px", marginLeft:"4px"}} size='mini' horizontal={true} children={subTag} tag/>
                )}
            </div>
            )}
            
        </div>
    );
}

export default ProjectBodyContent;

