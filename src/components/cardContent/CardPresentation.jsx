import React from "react";

import './style.scss';

export function CardPresentation(props) {
    return (
        <div className="card-presentation">
            <div className="header">
                <i className="fab fa-react"></i>
                <p>Componente para campo de senha</p>
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