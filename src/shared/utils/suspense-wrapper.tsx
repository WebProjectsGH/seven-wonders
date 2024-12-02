import React, { FC, Suspense } from "react";

interface IProps {
    element: FC;
    suspense?: FC;
}

const SuspenseWrapper: FC<IProps> = ({ element: ElementComp, suspense: SuspenseComp }) => {
    return (
        <Suspense fallback={SuspenseComp ? <SuspenseComp /> : <div>Loading</div>}>
            <ElementComp />
        </Suspense>
    );
};

export default SuspenseWrapper;
