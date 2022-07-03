import React from 'react';
import '../../CSS/Header.css';

const HeaderProfileContact = (props) => {
    const content = props.content;
    const image = props.image;
    const isHref = content?.startsWith("http");
    
    return (
        <>
            <img alt="" className='ProfileContactIcon' src={image}>
            </img>
            {isHref?
                <a href={content} style={{color:'white'}}>
                    <span className='ProfileContactSpan'>
                        {content}
                    </span>
                </a>
            :
            <span className="ProfileContactSpan">
                {content}
            </span>
            }
        </>
    );
}

export default HeaderProfileContact;