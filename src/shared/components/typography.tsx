import React, { CSSProperties, FC, ReactNode } from "react";

type tVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface iProps {
    variant?: tVariants;
    style?: CSSProperties;
    children?: ReactNode;
}

const variants: { [key in tVariants]: FC<iProps> } = {
    // h...
    h1: (props: iProps) => <H1 {...props}></H1>,
    h2: (props: iProps) => <H2 {...props}></H2>,
    h3: (props: iProps) => <H3 {...props}></H3>,
    h4: (props: iProps) => <H4 {...props}></H4>,
    h5: (props: iProps) => <H5 {...props}></H5>,
    h6: (props: iProps) => <H6 {...props}></H6>,
    // other...
};

const Typography: FC<iProps> = (props) => {
    return variants[props.variant || "h3"](props);
};
export default Typography;

// h...
const sH: CSSProperties = { fontFamily: "'Bree Serif', serif", fontWeight: 400 };
// h1
const sH1: CSSProperties = { ...sH, fontSize: "3rem" };
const H1: FC<iProps> = ({ style, children }) => <h1 style={{ ...sH1, ...style }}>{children}</h1>;
// h2
const sH2: CSSProperties = { ...sH, fontSize: "2rem" };
const H2: FC<iProps> = ({ style, children }) => <h2 style={{ ...sH2, ...style }}>{children}</h2>;
// h3
const sH3: CSSProperties = { ...sH, fontSize: "1.75rem" };
const H3: FC<iProps> = ({ style, children }) => <h3 style={{ ...sH3, ...style }}>{children}</h3>;
// h4
const sH4: CSSProperties = { ...sH, fontSize: "1.5rem" };
const H4: FC<iProps> = ({ style, children }) => <h4 style={{ ...sH4, ...style }}>{children}</h4>;
// h5
const sH5: CSSProperties = { ...sH, fontSize: "1.25rem" };
const H5: FC<iProps> = ({ style, children }) => <h5 style={{ ...sH5, ...style }}>{children}</h5>;
// h6
const sH6: CSSProperties = { ...sH, fontSize: "1rem" };
const H6: FC<iProps> = ({ style, children }) => <h6 style={{ ...sH6, ...style }}>{children}</h6>;
