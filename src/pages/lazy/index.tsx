import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const LazyPage: FC = () => {
    return <main>Lazy page</main>;
};
export default observer(LazyPage);
