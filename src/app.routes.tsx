import React, { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CSuspenseWrapper from "./shared/components/c.suspense-wrapper";

// ===== PAGES =====
import CWelcomePage from "./pages/welcome";
// ===== LAZY PAGES =====
const LazyPage = lazy(() => import("./pages/lazy"));

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CWelcomePage />} />
            <Route path="/create-game" element={<CSuspenseWrapper element={LazyPage} />} />

            {/*DEFAULT*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
