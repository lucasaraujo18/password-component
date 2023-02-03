import React from "react";
import { CardPresentation } from "../cardContent/CardPresentation";
import { InputPassword } from "../passwordComponent/InputPassword";

import './index.scss';


const component = <InputPassword />
const description = "Componente para um validação de senha no front, onde aparece uma lista na qual a medida que o campo vai sendo preenchido, a lista vai sendo atualizada e cada item sendo atualizado se for de acordo com a regra."
const title = "Básico";

export function MainContent() {
    return (
        <div className="main-content">
            <div className="card-row">
                <CardPresentation component={component} description={description} title={title}></CardPresentation>
                <CardPresentation component={component} description={description} title={title}></CardPresentation>
                <CardPresentation component={component} description={description} title={title}></CardPresentation>
            </div >
        </div >
    )
}