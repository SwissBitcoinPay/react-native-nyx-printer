export default class NyxTextFormat {
    textSize: number;
    underline: boolean;
    textScaleX: number;
    textScaleY: number;
    letterSpacing: number;
    lineSpacing: number;
    topPadding: number;
    leftPadding: number;
    align: NyxAlign;
    style: NyxFontStyle;
    font: NyxFont;
    constructor();
    toObject(): Record<string, number | boolean>;
}
export declare enum NyxFontStyle {
    normal = 0,
    bold = 1,
    italic = 2,
    boldItalic = 3
}
export declare enum NyxFont {
    defaultFont = 0,
    defaultBold = 1,
    sansSerif = 2,
    serif = 3,
    monospace = 4
}
export declare enum NyxAlign {
    left = 0,
    center = 1,
    right = 2
}
//# sourceMappingURL=NyxTextFormat.d.ts.map