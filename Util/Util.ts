export function convertNumberStringToArrayOfInt(numberString) {
    return numberString.split('').map(i => parseInt(i))
}