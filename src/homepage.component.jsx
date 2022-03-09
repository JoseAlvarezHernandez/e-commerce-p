import React from 'react';
import './homepage.styles.scss'

export default function HomePage(){
    const items = [
        { title: 'Hats' },
        { title: 'Jackets' },
        { title: 'Sneakers' },
        { title: 'Womens' },
        { title: 'Mens' }
    ];

    return (
        <div className="homepage">
            <div className="directory-menu">   
            {
                items.map(({title}) => (
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}