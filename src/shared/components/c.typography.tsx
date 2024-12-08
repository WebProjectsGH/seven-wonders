import React, { CSSProperties, FC, ReactNode } from "react";

type TVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IProps {
    variant?: TVariants;
    style?: CSSProperties;
    children?: ReactNode;
}

const variants: { [key in TVariants]: FC<IProps> } = {
    // h...
    h1: (props: IProps) => <CH1 {...props}></CH1>,
    h2: (props: IProps) => <CH2 {...props}></CH2>,
    h3: (props: IProps) => <CH3 {...props}></CH3>,
    h4: (props: IProps) => <CH4 {...props}></CH4>,
    h5: (props: IProps) => <CH5 {...props}></CH5>,
    h6: (props: IProps) => <CH6 {...props}></CH6>,
};

const CTypography: FC<IProps> = (props) => {
    return variants[props.variant || "h3"](props);
};
export default CTypography;

// h...
const SHx: CSSProperties = { fontFamily: "'Bree Serif', serif", fontWeight: 400 };

// h1
const SH1: CSSProperties = { ...SHx, fontSize: "3rem" };
const CH1: FC<IProps> = ({ style, children }) => <h1 style={{ ...SH1, ...style }}>{children}</h1>;

// h2
const SH2: CSSProperties = { ...SHx, fontSize: "2rem" };
const CH2: FC<IProps> = ({ style, children }) => <h2 style={{ ...SH2, ...style }}>{children}</h2>;

// h3
const SH3: CSSProperties = { ...SHx, fontSize: "1.75rem" };

const CH3: FC<IProps> = ({ style, children }) => <h3 style={{ ...SH3, ...style }}>{children}</h3>;

// h4
const SH4: CSSProperties = { ...SHx, fontSize: "1.5rem" };
const CH4: FC<IProps> = ({ style, children }) => <h4 style={{ ...SH4, ...style }}>{children}</h4>;

// h5
const SH5: CSSProperties = { ...SHx, fontSize: "1.25rem" };
const CH5: FC<IProps> = ({ style, children }) => <h5 style={{ ...SH5, ...style }}>{children}</h5>;

// h6
const SH6: CSSProperties = { ...SHx, fontSize: "1rem" };
const CH6: FC<IProps> = ({ style, children }) => <h6 style={{ ...SH6, ...style }}>{children}</h6>;
