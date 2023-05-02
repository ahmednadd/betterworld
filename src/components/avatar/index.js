import React from 'react';
import './avatar.scss';

const Avatar = (props) => {
    const { imgSrc, dimension, handleClick } = props;
    return (
        <div
            onClick={() => handleClick(null, true)}
            className="avatar-wrapper"
            style={{
                height: `${dimension}px`,
                width: `${dimension}px`
            }}
        >
            <img src={imgSrc} alt="User" />
        </div>
    );
};

export default Avatar;
