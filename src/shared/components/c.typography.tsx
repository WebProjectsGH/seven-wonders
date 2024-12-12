import React, { CSSProperties, FC, ReactNode } from "react";

type tVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface iProps {
    variant?: tVariants;
    style?: CSSProperties;
    children?: ReactNode;
}

const variants: { [key in tVariants]: FC<iProps> } = {
    // h...
    h1: (props: iProps) => <CH1 {...props}></CH1>,
    h2: (props: iProps) => <CH2 {...props}></CH2>,
    h3: (props: iProps) => <CH3 {...props}></CH3>,
    h4: (props: iProps) => <CH4 {...props}></CH4>,
    h5: (props: iProps) => <CH5 {...props}></CH5>,
    h6: (props: iProps) => <CH6 {...props}></CH6>,
};

const CTypography: FC<iProps> = (props) => {
    return variants[props.variant || "h3"](props);
};
export default CTypography;

// h...
const sHx: CSSProperties = { fontFamily: "'Bree Serif', serif", fontWeight: 400 };

// h1
const sH1: CSSProperties = { ...sHx, fontSize: "3rem" };
const CH1: FC<iProps> = ({ style, children }) => <h1 style={{ ...sH1, ...style }}>{children}</h1>;

// h2
const sH2: CSSProperties = { ...sHx, fontSize: "2rem" };
const CH2: FC<iProps> = ({ style, children }) => <h2 style={{ ...sH2, ...style }}>{children}</h2>;

// h3
const sH3: CSSProperties = { ...sHx, fontSize: "1.75rem" };
const CH3: FC<iProps> = ({ style, children }) => <h3 style={{ ...sH3, ...style }}>{children}</h3>;

// h4
const sH4: CSSProperties = { ...sHx, fontSize: "1.5rem" };
const CH4: FC<iProps> = ({ style, children }) => <h4 style={{ ...sH4, ...style }}>{children}</h4>;

// h5
const sH5: CSSProperties = { ...sHx, fontSize: "1.25rem" };
const CH5: FC<iProps> = ({ style, children }) => <h5 style={{ ...sH5, ...style }}>{children}</h5>;

// h6
const sH6: CSSProperties = { ...sHx, fontSize: "1rem" };
const CH6: FC<iProps> = ({ style, children }) => <h6 style={{ ...sH6, ...style }}>{children}</h6>;
