import React, { useEffect, useState } from 'react';
import { ButtonComponent } from '../buttonComponent/ButtonComponent';

import './style.scss';
import './mobile.scss';

export function InputPassword(props) {
    const [showList, setShowList] = useState(false);
    const [passedRule1, setPassedRule1] = useState(false);
    const [passedRule2, setPassedRule2] = useState(false);
    const [passedRule3, setPassedRule3] = useState(false);
    const [passedRule4, setPassedRule4] = useState(false);
    const [passedRule5, setPassedRule5] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [passwordType, setPasswordType] = useState('password');

    useEffect(() => {
        setShowButton(props.showButton);
        setShowIcon(props.showIcon);
    }, [props.showButton, props.showIcon]);

    const rules = [
        {
            key: 0,
            title: 'Sua senha deve ter:',
            icon: '',
            passedRule: false,
        },
        {
            key: 1,
            title: '8 ou mais caracteres',
            icon: <i className="far fa-check-circle"></i>,
            passedRule: passedRule1,
        },
        {
            key: 2,
            title: 'Pelo menos uma letra minúscula',
            icon: <i className="far fa-check-circle"></i>,
            passedRule: passedRule2,
        },
        {
            key: 3,
            title: 'Pelo menos uma letra maiúscula',
            icon: <i className="far fa-check-circle"></i>,
            passedRule: passedRule3,
        },
        {
            key: 4,
            title: 'Pelo menos um caractere especial',
            icon: <i className="far fa-check-circle"></i>,
            passedRule: passedRule4,
        },
        {
            key: 5,
            title: 'Pelo menos um número',
            icon: <i className="far fa-check-circle"></i>,
            passedRule: passedRule5,
        },
    ]


    const RulesList = () => {
        return (
            <ul className="show-pass-request">
                {rules.map((rule) =>
                    <li className={rule.passedRule ? 'rule-passed' : 'rule-not-passed'}
                        key={rule.key} id={`${props.name}-${rule.key}`}>
                        {rule.passedRule ? rule.icon : ''} {rule.title}
                    </li>
                )}
            </ul>
        )
    }

    const showRulesList = (password) => {
        const lowerCase = /[a-z]/;
        const upperCase = /[A-Z]/;
        const specialChar = /\W/;
        const numberChar = /\d/;

        password.length > 0 ? setShowList(true) : setShowList(false);
        password.length >= 8 ? setPassedRule1(true) : setPassedRule1(false);

        lowerCase.test(password) ? setPassedRule2(true) : setPassedRule2(false);
        upperCase.test(password) ? setPassedRule3(true) : setPassedRule3(false);
        specialChar.test(password) ? setPassedRule4(true) : setPassedRule4(false);
        numberChar.test(password) ? setPassedRule5(true) : setPassedRule5(false);

    };

    const handleSubmit = () => {
        if (showButton) {
            for (let i = 0; i < rules.length; i++) {
                if (!rules[i].passedRule && rules[i].key !== 0) {
                    document.getElementById(`${props.name}-${rules[i].key}`).classList.add('rule-invalid');
                    document.getElementById(`${props.name}-${rules[i].key}`).classList.remove('rule-not-passed');

                    document.getElementById(`${props.name}-${rules[i].key}`).innerHTML = `<i class='far fa-times-circle'></i> ${rules[i].title}`
                }

            }
        }
    }

    const viewPassword = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }

    }

    return (
        <>
            <div className="display-component">
                <div className="row-input">
                    <input type={passwordType} name={props.name} id={props.name} onKeyUp={
                        (event) => showRulesList(event.currentTarget.value)} className="template-form" />
                    {showIcon ? passwordType === 'password' ?
                        <i className="far fa-eye-slash" onClick={viewPassword}></i>
                        : <i className="far fa-eye" onClick={viewPassword}></i>
                        : ''}
                </div>
                {showList ? <RulesList /> : ''}
                {showButton ? <ButtonComponent text="Enviar" buttonFunction={() => handleSubmit()}></ButtonComponent> : ''}
            </div>
        </>
    )
}