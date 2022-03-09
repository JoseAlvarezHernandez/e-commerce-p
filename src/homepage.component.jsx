import React from 'react';

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
                <div className="menu-item">
                {
                    items.map(({title}) => (
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <span className="subtitle">Shop Now</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
}