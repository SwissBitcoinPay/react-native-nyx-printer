export default class NyxTextFormat {
  constructor() {
    this.textSize = 24;
    this.underline = false;
    this.textScaleX = 1.0;
    this.textScaleY = 1.0;
    this.letterSpacing = 0;
    this.lineSpacing = 0;
    this.topPadding = 0;
    this.leftPadding = 0;
    this.align = NyxAlign.left;
    this.style = NyxFontStyle.normal;
    this.font = NyxFont.defaultFont;
  }
  toObject() {
    return {
      textSize: this.textSize,
      underline: this.underline,
      textScaleX: this.textScaleX,
      textScaleY: this.textScaleY,
      letterSpacing: this.letterSpacing,
      lineSpacing: this.lineSpacing,
      topPadding: this.topPadding,
      leftPadding: this.leftPadding,
      align: this.align === NyxAlign.left ? 0 : this.align === NyxAlign.center ? 1 : 2,
      style: this.style === NyxFontStyle.normal ? 0 : this.style === NyxFontStyle.bold ? 1 : this.style === NyxFontStyle.italic ? 2 : 3,
      font: this.font === NyxFont.defaultFont ? 0 : this.font === NyxFont.defaultBold ? 1 : this.font === NyxFont.sansSerif ? 2 : this.font === NyxFont.serif ? 3 : 4
    };
  }
}
export let NyxFontStyle = /*#__PURE__*/function (NyxFontStyle) {
  NyxFontStyle[NyxFontStyle["normal"] = 0] = "normal";
  NyxFontStyle[NyxFontStyle["bold"] = 1] = "bold";
  NyxFontStyle[NyxFontStyle["italic"] = 2] = "italic";
  NyxFontStyle[NyxFontStyle["boldItalic"] = 3] = "boldItalic";
  return NyxFontStyle;
}({});
export let NyxFont = /*#__PURE__*/function (NyxFont) {
  NyxFont[NyxFont["defaultFont"] = 0] = "defaultFont";
  NyxFont[NyxFont["defaultBold"] = 1] = "defaultBold";
  NyxFont[NyxFont["sansSerif"] = 2] = "sansSerif";
  NyxFont[NyxFont["serif"] = 3] = "serif";
  NyxFont[NyxFont["monospace"] = 4] = "monospace";
  return NyxFont;
}({});
export let NyxAlign = /*#__PURE__*/function (NyxAlign) {
  NyxAlign[NyxAlign["left"] = 0] = "left";
  NyxAlign[NyxAlign["center"] = 1] = "center";
  NyxAlign[NyxAlign["right"] = 2] = "right";
  return NyxAlign;
}({});
//# sourceMappingURL=NyxTextFormat.js.map