import React, { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SuspenseWrapper from "./shared/utils/suspense-wrapper";

// ===== PAGES =====
import WelcomePage from "./pages/welcome";
// ===== LAZY PAGES =====
const LazyPAge = lazy(() => import("./pages/lazy"));

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/create-game" element={<SuspenseWrapper element={LazyPAge} />} />

            {/*DEFAULT*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
