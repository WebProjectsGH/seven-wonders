import React, { FC, ReactNode, CSSProperties } from "react";

type TVariants = "default" | "centered";

interface IProps {
    variant?: TVariants;
    style?: CSSProperties;
    children?: ReactNode;
}

const variants: { [key in TVariants]: FC<IProps> } = {
    default: (props: IProps) => <CDefaultPage {...props}></CDefaultPage>,
    centered: (props: IProps) => <CCenteredPage {...props}></CCenteredPage>,
};

const CPage: FC<IProps> = (props) => {
    return variants[props.variant || "centered"](props);
};
export default CPage;

// Variants...
const SxPage: CSSProperties = {
    height: "100%",
    background: `radial-gradient(100% 215.42% at 0% 0%, #3a5b3c 0%, #363a36 100%)`,
};

// default
const SDefaultPage: CSSProperties = { ...SxPage };
const CDefaultPage: FC<IProps> = ({ children }) => <main style={SDefaultPage}>{children}</main>;

// centered
const SCenteredPage: CSSProperties = {
    ...SxPage,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};
const CCenteredPage: FC<IProps> = ({ children }) => <main style={SCenteredPage}>{children}</main>;
