import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContent } from "../components/mainContent/MainContent";
import { NavbarSystem } from "../components/navbarSystem/NavbarSystem";

export function RouteSystem() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavbarSystem />}>
                    <Route index element={<MainContent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
