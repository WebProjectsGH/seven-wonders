import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import CPage from "../../shared/components/c.page";
import CTypography from "../../shared/components/c.typography";
import makeMetalText from "../../shared/utils/make-metal-text";
import { EPalette } from "../../shared/enums/e.palette";

const CWelcomePage: FC = () => {
    return (
        <CPage variant="centered">
            <CTypography variant="h1" style={makeMetalText(EPalette.gold)}>
                Welcome Page
            </CTypography>
        </CPage>
    );
};
export default observer(CWelcomePage);
