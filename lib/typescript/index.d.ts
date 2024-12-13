import NyxTextFormat from './NyxTextFormat';
export declare function multiply(a: number, b: number): Promise<number>;
export declare function printText(text: string, textFormat: NyxTextFormat): Promise<number>;
export declare function printBarcode(content: string, width: number, height: number): Promise<number>;
export declare function printQrCode(content: string, width: number, height: number): Promise<number>;
export declare function printBitmap(inputBytes: number[]): Promise<number>;
export declare function paperOut(): Promise<number>;
export { NyxTextFormat };
//# sourceMappingURL=index.d.ts.map