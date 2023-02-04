import React from "react";

import './style.scss';

export function ButtonComponent(props) {
    return (
        <button className="button-component" onClick={props.buttonFunction}>{props.text}</button>
    )
} 