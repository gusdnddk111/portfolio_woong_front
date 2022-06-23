import React from 'react';

const ProjectsContentHeader = (props) => {
    const content = props.content;

    return (
        <>
            <div className="ContentHeader"/>
            <div className="ContentHeaderTitle">
                <span>{content}</span>
            </div>
        </>
    );
}

export default ProjectsContentHeader;