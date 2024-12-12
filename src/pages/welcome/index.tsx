import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import CPage from "../../shared/components/c.page";
import CTypography from "../../shared/components/c.typography";
import uMakeMetalText from "../../shared/utils/u.make-metal-text";
import { ePalette } from "../../shared/enums/e.palette";

const CWelcomePage: FC = () => {
    return (
        <CPage variant="centered">
            <CTypography variant="h1" style={uMakeMetalText(ePalette.gold)}>
                Welcome Page
            </CTypography>
        </CPage>
    );
};
export default observer(CWelcomePage);
