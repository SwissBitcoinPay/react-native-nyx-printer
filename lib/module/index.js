import { NativeModules, Platform } from 'react-native';
import NyxTextFormat from './NyxTextFormat';
const LINKING_ERROR = `The package 'react-native-nyx-printer' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const NyxPrinterModule = isTurboModuleEnabled ? require('./NativeNyxPrinter').default : NativeModules.NyxPrinter;
const NyxPrinter = NyxPrinterModule ? NyxPrinterModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function multiply(a, b) {
  return NyxPrinter.multiply(a, b);
}
export function printText(text, textFormat = new NyxTextFormat()) {
  return NyxPrinter.printText(text, textFormat.toObject());
}
export function printBarcode(content, width, height) {
  return NyxPrinter.printBarcode(content, width, height);
}
export function printQrCode(content, width, height) {
  return NyxPrinter.printQrCode(content, width, height);
}
export function printBitmap(inputBytes) {
  return NyxPrinter.printBitmap(inputBytes);
}
export function paperOut() {
  return NyxPrinter.paperOut();
}
export { NyxTextFormat };
//# sourceMappingURL=index.js.map