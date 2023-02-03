import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { CardPresentation } from './components/cardContent/CardPresentation';
import { InputPassword } from './components/passwordComponent/InputPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));

const component = <InputPassword />
const description = "Componente para um validação de senha no front, onde aparece uma lista na qual a medida que o campo vai sendo preenchido, a lista vai sendo atualizada e cada item sendo atualizado se for de acordo com a regra"

root.render(
    <React.StrictMode>
        <CardPresentation component={component} description={description}></CardPresentation>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
