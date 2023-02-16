import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContent } from "../components/mainContent/MainContent";

export function RouteSystem() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<MainContent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
