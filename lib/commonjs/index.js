"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "NyxAlign", {
  enumerable: true,
  get: function () {
    return _NyxTextFormat.NyxAlign;
  }
});
Object.defineProperty(exports, "NyxTextFormat", {
  enumerable: true,
  get: function () {
    return _NyxTextFormat.default;
  }
});
exports.multiply = multiply;
exports.paperOut = paperOut;
exports.printBarcode = printBarcode;
exports.printBitmap = printBitmap;
exports.printQrCode = printQrCode;
exports.printText = printText;
var _reactNative = require("react-native");
var _NyxTextFormat = _interopRequireWildcard(require("./NyxTextFormat"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LINKING_ERROR = `The package 'react-native-nyx-printer' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const NyxPrinterModule = isTurboModuleEnabled ? require('./NativeNyxPrinter').default : _reactNative.NativeModules.NyxPrinter;
const NyxPrinter = NyxPrinterModule ? NyxPrinterModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return NyxPrinter.multiply(a, b);
}
function printText(text, textFormat) {
  const defaultValues = new _NyxTextFormat.default().toObject();
  const finalTextFormat = {
    ...defaultValues,
    ...textFormat
  };
  return NyxPrinter.printText(text, finalTextFormat);
}
function printBarcode(content, width, height) {
  return NyxPrinter.printBarcode(content, width, height);
}
function printQrCode(content, width, height) {
  return NyxPrinter.printQrCode(content, width, height);
}
function printBitmap(inputBytes) {
  return NyxPrinter.printBitmap(inputBytes);
}
function paperOut() {
  return NyxPrinter.paperOut();
}
//# sourceMappingURL=index.js.map