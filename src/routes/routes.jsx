import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContent } from "../components/mainContent/MainContent";
import { NavbarComponent } from "../components/navbarComponent/NavbarComponent";


export function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavbarComponent />}>
                    <Route index element={<MainContent />} />
                    <Route
                        path="play"
                        element={<MainContent />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
