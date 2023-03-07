import React from "react";
import { Outlet } from "react-router-dom";

import "./style.scss";
import "./mobile.scss";

export function NavbarSystem() {
    return (
        <>
            {/* DESKTOP */}
            <div className="nav-bar">
                <ul>
                    <li>
                        Contato: &nbsp;
                        <a href="https://github.com/lucasaraujo18" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> &nbsp;</a>
                        <a href="https://br.linkedin.com/in/lucas-de-araújo-florencio-a0a223229?trk=public_profile_browsemap" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> &nbsp;</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        Feito com: &nbsp;
                        <i className="fab fa-react"></i> &nbsp;
                        <i className="fab fa-css3"></i>
                    </li>
                </ul>
            </div>
            {/* MOBILE */}


            <Outlet />
        </>
    );
}
