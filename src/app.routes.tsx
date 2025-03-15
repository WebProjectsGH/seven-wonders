import React, { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SuspenseWrapper from "./shared/components/suspense-wrapper";

// ===== PAGES =====
import WelcomePage from "./pages/welcome";
// ===== LAZY PAGES =====
const LazyPage = lazy(() => import("./pages/lazy"));

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/create-game" element={<SuspenseWrapper element={LazyPage} />} />

            {/*DEFAULT*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
