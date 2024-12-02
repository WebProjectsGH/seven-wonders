import React, { ReactNode, Component, ErrorInfo } from "react";

interface IProps {
    children?: ReactNode;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
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
