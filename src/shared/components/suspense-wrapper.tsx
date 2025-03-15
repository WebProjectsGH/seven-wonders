import React, { FC, Suspense } from "react";

interface iProps {
    element: FC;
    suspense?: FC;
}

const SuspenseWrapper: FC<iProps> = ({ element: ElementComp, suspense: SuspenseComp }) => {
    return (
        <Suspense fallback={SuspenseComp ? <SuspenseComp /> : <div>Loading...</div>}>
            <ElementComp />
        </Suspense>
    );
};

export default SuspenseWrapper;
