import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import CPage from "../../shared/components/c.page";
import CTypography from "../../shared/components/c.typography";

const CWelcomePage: FC = () => {
    return (
        <CPage variant="centered">
            <CTypography variant="h1">Welcome Page</CTypography>
        </CPage>
    );
};
export default observer(CWelcomePage);
