import { CSSProperties } from "react";
import uEditColor from "./u.edit-color";

const uMakeMetalText = (color: string): CSSProperties => {
    return {
        backgroundClip: "text",
        color: "transparent",
        backgroundImage: `linear-gradient(${color} 60%, ${uEditColor(color, -30)} 40%)`,
    };
};
export default uMakeMetalText;
