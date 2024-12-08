import React, { FC, Suspense } from "react";

interface IProps {
    element: FC;
    suspense?: FC;
}

const CSuspenseWrapper: FC<IProps> = ({ element: CElement, suspense: CSuspense }) => {
    return (
        <Suspense fallback={CSuspense ? <CSuspense /> : <div>Loading...</div>}>
            <CElement />
        </Suspense>
    );
};

export default CSuspenseWrapper;
