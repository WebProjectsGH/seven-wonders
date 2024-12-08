import React from "react";
import "./app.css";
import CErrorBoundary from "./shared/utils/c.error-boundary";
import { HashRouter as Router } from "react-router-dom";
import { Store, StoreProvider } from "./store";
import AppRoutes from "./app.routes";

const store = new Store();

function App() {
    return (
        <CErrorBoundary>
            <StoreProvider value={store}>
                <Router>
                    <AppRoutes />
                </Router>
            </StoreProvider>
        </CErrorBoundary>
    );
}

export default App;
