import React from 'react'

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title"> HELEMTS </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title"> JACKETS </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title"> GLOVES </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title"> BOOTS </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title"> ACCESSORIES </h1>
                    <span className="subtitle"> Shop Now </span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;