export function indentCapitalize(string) {
    const indentChar = string.charAt(0).toUpperCase();

    return indentChar + string.slice(1);
}