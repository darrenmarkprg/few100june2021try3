export function isEven(e: number): boolean {
    return e % 2 === 0;
}

export function IsOdd(e: number): boolean {
    return !isEven(e);
}