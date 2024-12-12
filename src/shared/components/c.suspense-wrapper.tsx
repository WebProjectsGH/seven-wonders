import React, { FC, Suspense } from "react";

interface iProps {
    element: FC;
    suspense?: FC;
}

const CSuspenseWrapper: FC<iProps> = ({ element: CElement, suspense: CSuspense }) => {
    return (
        <Suspense fallback={CSuspense ? <CSuspense /> : <div>Loading...</div>}>
            <CElement />
        </Suspense>
    );
};

export default CSuspenseWrapper;
