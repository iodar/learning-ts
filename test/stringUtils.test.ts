import * as stringUtils from "./../src/stringUtils";

test("leftPad should return original String with padding", () => {
    const originalString = "foo";
    const padString = "0";
    const numberOfPads = 10;
    const finalPaddedString = stringUtils.leftPad(originalString, padString, numberOfPads);
    expect(finalPaddedString).toBe("0000000000foo");
});

test("leftPad should return original string when not padded", () => {
    const originalString = "foo";
    const padString = "0";
    const finalPaddedString = stringUtils.leftPad(originalString, padString, 0);
    expect(finalPaddedString).toBe(originalString);
});

test("rightPad should return original string when not padded", () => {
    const originalString = "foo";
    const padString = "0";
    const finalPaddedString = stringUtils.rightPad(originalString, padString, 0);
    expect(finalPaddedString).toBe(originalString);
});

test("rightPad should return original String with padding", () => {
    const originalString = "foo";
    const padString = "0";
    const numberOfPads = 10;
    const finalPaddedString = stringUtils.rightPad(originalString, padString, numberOfPads);
    expect(finalPaddedString).toBe("foo0000000000");
});

test("isEmpty should return true if string is empty", () => {
    const isEmptyResult: boolean = stringUtils.isEmpty("");
    expect(isEmptyResult).toBeTruthy();
});

test("isEmpty should return false if string is not empty", () => {
    const isEmptyResult: boolean = stringUtils.isEmpty(" ");
    expect(isEmptyResult).toBeFalsy();
});

test("isEmpty should return false if string is not empty", () => {
    const isEmptyResult: boolean = stringUtils.isEmpty("a");
    expect(isEmptyResult).toBeFalsy();
});