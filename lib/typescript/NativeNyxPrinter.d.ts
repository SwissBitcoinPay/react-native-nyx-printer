import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    multiply(a: number, b: number): Promise<number>;
    printText(text: string, textFormat: Object): Promise<number>;
    printBarcode(content: string, width: number, height: number): Promise<number>;
    printQrCode(content: string, width: number, height: number): Promise<number>;
    printBitmap(inputBytes: number[]): Promise<number>;
    paperOut(): Promise<number>;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeNyxPrinter.d.ts.map