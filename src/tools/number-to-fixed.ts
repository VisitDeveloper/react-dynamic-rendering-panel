export function numberToFixed(number: number, toFixed: number): number {
    const stringedNumber: string = number.toFixed(toFixed);
    const numericValue: number = Number(stringedNumber);
    const isNotNumber: boolean = isNaN(numericValue);
    const value: number = isNotNumber ? 0 : numericValue;
    return value;
  }
  
