import React, { useState } from 'react';

export function InputPassword() {
    const [showList, setShowList] = useState(false);
    const [passedRule1, setPassedRule1] = useState(false);
    const [passedRule2, setPassedRule2] = useState(false);
    const [passedRule3, setPassedRule3] = useState(false);
    const [passedRule4, setPassedRule4] = useState(false);
    const [passedRule5, setPassedRule5] = useState(false);

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
            icon: <i class="far fa-check-circle"></i>,
            passedRule: passedRule1,
        },
        {
            key: 2,
            title: 'Pelo menos uma letra minúscula',
            icon: <i class="far fa-check-circle"></i>,
            passedRule: passedRule2,
        },
        {
            key: 3,
            title: 'Pelo menos uma letra maiúscula',
            icon: <i class="far fa-check-circle"></i>,
            passedRule: passedRule3,
        },
        {
            key: 4,
            title: 'Pelo menos um caractere especial',
            icon: <i class="far fa-check-circle"></i>,
            passedRule: passedRule4,
        },
        {
            key: 5,
            title: 'Pelo menos um número',
            icon: <i class="far fa-check-circle"></i>,
            passedRule: passedRule5,
        },
    ]

    const Rules = () => {
        rules.forEach(rule => {
            <li>{rule.title}</li>
        });
    }

    const RulesList = () => {
        return (
            <ul>
                {Rules()}
            </ul>
        )
    }

    return (
        <>
            <input type="password" name="test" id="test" />
            {showList ? <RulesList /> : ''}
        </>
    )
}