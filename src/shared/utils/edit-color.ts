const editColor = (color: string, value: number) => {
    const rgbaRegex = /^rgb(a?)\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$/;
    const rgbaMatch = color.match(rgbaRegex);
    if (rgbaMatch) {
        const [r, g, b, a] = rgbaMatch.slice(2);
        const newR = Math.min(Math.max(0, parseInt(r) + value), 255);
        const newG = Math.min(Math.max(0, parseInt(g) + value), 255);
        const newB = Math.min(Math.max(0, parseInt(b) + value), 255);

        return `rgba(${newR}, ${newG}, ${newB}, ${a || 1})`;
    }

    const hexRegex = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;
    const hexMatch = color.match(hexRegex);
    if (hexMatch) {
        const hex = hexMatch[1];
        const isShortHex = hex.length === 3 || hex.length === 4;

        const r = parseInt(isShortHex ? hex[0] + hex[0] : hex.slice(0, 2), 16);
        const g = parseInt(isShortHex ? hex[1] + hex[1] : hex.slice(2, 4), 16);
        const b = parseInt(isShortHex ? hex[2] + hex[2] : hex.slice(4, 6), 16);
        const a = isShortHex
            ? parseInt(hex[3] + hex[3] || "ff", 16) / 255
            : parseInt(hex.slice(6, 8) || "ff", 16) / 255;

        const newR = Math.min(Math.max(0, r + value), 255);
        const newG = Math.min(Math.max(0, g + value), 255);
        const newB = Math.min(Math.max(0, b + value), 255);
        const newA = Math.round(a * 255);

        const toHex = (num: number) => num.toString(16).padStart(2, "0");
        return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}${toHex(newA)}`;
    }

    return color;
};
export default editColor;
