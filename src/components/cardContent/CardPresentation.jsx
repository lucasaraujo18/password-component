import React from "react";

import './style.scss';
import './mobile.scss';

export function CardPresentation(props) {
    return (
        <div className="card-presentation">
            <div className="header">
                {props.icon}
            </div>
            <div className="title-content">
                {props.title}
            </div>
            <div className="content-description">
                {props.description}
            </div>
            <div>
                {props.component}
            </div>
        </div>
    )
}