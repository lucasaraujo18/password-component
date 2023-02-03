import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./style.scss";

export function NavbarSystem() {
    return (
        <>
            <div className="nav-bar">
                <ul>
                    <Link to="/">
                        <li>
                            {/* <img
                                src={logo}
                                className="nav-bar-logo"
                                alt="logo"
                            /> */}
                        </li>
                    </Link>
                    <Link to="play" className="text-white">
                        <li>
                            Jogar <i className="fab fa-react"></i>
                        </li>
                    </Link>
                    <li>
                        Feito com <i className="fab fa-react"></i>
                        <i className="fab fa-react"></i>
                        <i className="fab fa-react"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        Criar conta <i className="fab fa-react"></i>
                    </li>
                    <li>
                        Entrar <i className="fab fa-react"></i>
                    </li>
                </ul>
            </div>

            <Outlet />
        </>
    );
}
