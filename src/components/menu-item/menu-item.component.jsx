import React from 'react';
import classNames from 'classnames';

import './menu-item.styles.scss'

export default function MenuItem({ title, imageUrl, size }){
    return (
        <div
            className={classNames('menu-item', { [size]: !!size })}
        >
            <div 
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}