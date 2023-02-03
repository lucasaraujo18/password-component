import React, { useState } from 'react';

import './style.scss';

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

    const RulesList = () => {
        return (
            <ul className="show-pass-request">
                {rules.map((rule) =>
                    <li className={rule.passedRule ? 'rule-passed' : 'rule-not-passed'}
                        key={rule.key}>
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

    return (
        <>
            <div className="display-component">
                <input className="input-password" type="password" name="test" id="test" onKeyUp={
                    (event) => showRulesList(event.currentTarget.value)} />
                {showList ? <RulesList /> : ''}
            </div>
        </>
    )
}