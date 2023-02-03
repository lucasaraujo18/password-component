import React from "react";
import { CardPresentation } from "../cardContent/CardPresentation";
import { InputPassword } from "../passwordComponent/InputPassword";

import './index.scss';

const component = <InputPassword />
const description = "Componente para validar senha apenas no front, onde aparece uma lista na qual a medida que o campo vai sendo preenchido, a lista vai sendo atualizada e cada item sendo atualizado se for de acordo com a regra."
const title = "Básico";

const componentII = <InputPassword />
const descriptionII = "Componente para validar senha apenas no front. Aditivo de um ícone clicável, na qual o conteúdo digitado na senha pode se tornar visível."
const titleII = "Senha visível";

const componentIII = <InputPassword />
const descriptionIII = "Componente para validar senha apenas no front. Aditivo de um validador, no qual após a senha ser validada. Retorna uma mensagem de sucesso ou os informa os items que não foram preenchidos na lista."
const titleIII = "Com validação";

export function MainContent() {
    return (
        <div className="main-content">
            <div className="card-row">
                <CardPresentation component={component} description={description} title={title}></CardPresentation>
                <CardPresentation component={componentII} description={descriptionII} title={titleII}></CardPresentation>
                <CardPresentation component={componentIII} description={descriptionIII} title={titleIII}></CardPresentation>
            </div >
        </div >
    )
}