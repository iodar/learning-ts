export function leftPad(originalString: string, padString: string, times: number) {
    let paddedString: string = originalString;
    for (let index = 0; index < times; index++) {
        paddedString = padString + paddedString;
    }
    return paddedString;
}

export function rightPad(originalString: string, padString: string, times: number) {
    let paddedString: string = originalString;
    for (let index = 0; index < times; index++) {
        paddedString = paddedString + padString;
    }
    return paddedString;
}

export function isEmpty(value: string) {
    return value === "";
}