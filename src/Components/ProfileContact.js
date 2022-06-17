import React, { useEffect, useState } from 'react';
import HeaderCss from '../CSS/Header.css';

const ProfileContact = (props) => {
    const content = props.content;
    const image = props.image;
    const isHref = content.startsWith("http");
    
    return (
        <>
            <img className='ProfileContactIcon' src={image}>
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

export default ProfileContact;