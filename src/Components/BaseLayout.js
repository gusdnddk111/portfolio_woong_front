import React from 'react';
import CommonCss from '../CSS/Common.css';
import TitleHeader from './TitleHeader';

const BaseLayout = (props) => {
    const contents = props.contents;
    const title = props.title;
    console.log(contents)
    return (
        <>
            <div className="BaseContainer">
                <div className="LeftOffset">
                    <div className="VerticalLine"/>
                </div>
                <div className="RightContainer">
                    <TitleHeader content={title}/>
                    <div className="Contents">
                        {contents}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BaseLayout;