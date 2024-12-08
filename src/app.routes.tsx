import React, { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CSuspenseWrapper from "./shared/utils/c.suspense-wrapper";

// ===== PAGES =====
import CWelcomePage from "./pages/welcome";
// ===== LAZY PAGES =====
const LazyPAge = lazy(() => import("./pages/lazy"));

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CWelcomePage />} />
            <Route path="/create-game" element={<CSuspenseWrapper element={LazyPAge} />} />

            {/*DEFAULT*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
