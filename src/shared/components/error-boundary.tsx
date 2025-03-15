import React, { ReactNode, Component, ErrorInfo } from "react";

interface iProps {
    children?: ReactNode;
}

interface iState {
    hasError: boolean;
}

class ErrorBoundary extends Component<iProps, iState> {
    constructor(props: iProps) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error: ", error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong...</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
