import React, { FC, ReactNode, CSSProperties } from "react";
import { ePalette } from "../enums/e.palette";

type tVariants = "default" | "centered";

interface iProps {
    variant?: tVariants;
    style?: CSSProperties;
    children?: ReactNode;
}

const variants: { [key in tVariants]: FC<iProps> } = {
    default: (props: iProps) => <CDefaultPage {...props}></CDefaultPage>,
    centered: (props: iProps) => <CCenteredPage {...props}></CCenteredPage>,
};

const CPage: FC<iProps> = (props) => {
    return variants[props.variant || "centered"](props);
};
export default CPage;

// Variants...
const sPage: CSSProperties = {
    height: "100%",
    background: `radial-gradient(100% 215.42% at 0% 0%, ${ePalette.background1} 0%, ${ePalette.background2} 100%)`,
};

// default
const sDefaultPage: CSSProperties = { ...sPage };
const CDefaultPage: FC<iProps> = ({ children }) => <main style={sDefaultPage}>{children}</main>;

// centered
const sCenteredPage: CSSProperties = {
    ...sPage,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};
const CCenteredPage: FC<iProps> = ({ children }) => <main style={sCenteredPage}>{children}</main>;
