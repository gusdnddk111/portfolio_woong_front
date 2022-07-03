import React from 'react';
import '../CSS/Common.css';
import ContentTitle from './ContentTitle';

const BaseLayout = (props) => {
    const contents = props.contents;
    const title = props.title;

    return (
        <>
            <div className="BaseContainer">
                <div className="LeftOffset">
                    <div className="VerticalLine"/>
                </div>
                <div className="RightContainer">
                    {title && <ContentTitle content={title}/>}
                    <div className="Contents">
                        {contents}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BaseLayout;