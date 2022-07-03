export default function roundNumber(num, decimalPlaces = 2) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}