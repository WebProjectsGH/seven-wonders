import { CSSProperties } from "react";
import editColor from "./edit-color";

const makeMetalText = (color: string): CSSProperties => {
    return {
        backgroundClip: "text",
        color: "transparent",
        backgroundImage: `linear-gradient(${color} 60%, ${editColor(color, -30)} 40%)`,
    };
};
export default makeMetalText;
