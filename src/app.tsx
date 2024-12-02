import React from "react";
import "./app.css";
import ErrorBoundary from "./shared/utils/error-boundary";
import { HashRouter as Router } from "react-router-dom";
import { Store, StoreProvider } from "./store";
import AppRoutes from "./app.routes";

const store = new Store();

function App() {
    return (
        <ErrorBoundary>
            <StoreProvider value={store}>
                <Router>
                    <AppRoutes />
                </Router>
            </StoreProvider>
        </ErrorBoundary>
    );
}

export default App;
