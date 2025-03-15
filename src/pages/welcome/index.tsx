import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Page from "../../shared/components/page";
import Typography from "../../shared/components/typography";
import uMakeMetalText from "../../shared/utils/u.make-metal-text";
import { ePalette } from "../../shared/enums/e.palette";

const WelcomePage: FC = () => {
    return (
        <Page variant="centered">
            <Typography variant="h1" style={uMakeMetalText(ePalette.gold)}>
                Welcome Page
            </Typography>
        </Page>
    );
};
export default observer(WelcomePage);
