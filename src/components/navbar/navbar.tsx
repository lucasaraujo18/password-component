import React from "react";
import { Outlet, Link } from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./style.scss";

export function navbar() {
    return (
        <>
            <div className="nav-bar d-flex justify-content-between">
                <ul>
                    <Link to="/">
                        {/* <li>
                            <img
                                src={logo}
                                className="nav-bar-logo"
                                alt="logo"
                            />
                        </li> */}
                    </Link>
                    <Link to="play" className="text-white">
                        <li>
                            <i className="fab fa-react"></i>
                        </li>
                    </Link>
                    <li>
                        Feito com <i className="fab fa-react"></i>
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
