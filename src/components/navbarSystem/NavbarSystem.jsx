import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./style.scss";

export function NavbarSystem() {
    return (
        <>
            <div className="nav-bar">
                <ul>
                    <Link to="play" className="text-white">
                        <li>
                            Sobre: &nbsp;
                            <i className="fab fa-github"></i> &nbsp;
                            <i className="fab fa-linkedin"></i> &nbsp;
                        </li>
                    </Link>
                </ul>
                <ul>
                    <li>
                        Feito com: &nbsp;
                        <i className="fab fa-react"></i> &nbsp;
                        <i className="fab fa-css3"></i>
                    </li>
                </ul>
            </div>

            <Outlet />
        </>
    );
}
