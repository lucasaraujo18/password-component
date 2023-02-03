import React from "react";

import './style.scss';

export function CardPresentation(props) {
    return (
        <div className="main-content">
            <div className="card-presentation">
                <div className="header">
                    <i className="fab fa-react"></i>
                    <p>Componente para campo de senha</p>
                </div>
                <div>
                    {props.component}
                </div>
            </div>
        </div>
    )
}