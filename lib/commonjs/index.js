"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
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
var _NyxTextFormat = _interopRequireDefault(require("./NyxTextFormat"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
function printText(text, textFormat = new _NyxTextFormat.default()) {
  return NyxPrinter.printText(text, textFormat.toObject());
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