function FtoC (Fahrenheit) {
    var C = (Fahrenheit - 32) * 5/9;
    if (Fahrenheit < -459.67 ) {
            throw new Exception("Fahrenheit cannot be negative. ");
        }
    return C;
}
function CtoF (Celsius) {
    var F = Celsius * 5/9 + 32;
    if (Celsius < 0) {
            throw new Exception("Celsius cannot be negative. ");
        }
    return F;
}
function MtoK (miles) {
    var K = miles * 1.6;
    if (miles < 0) {
            throw new Exception("Miles cannot be negative. ");
        }
    return K;
}
function OtoG (oz) {
    var g = oz * 28.35;
    if (oz < 0) {
            throw new Exception("Ounce cannot be negative. ");
        }
    return g.toFixed(3);
}
function isValid(val,floor) {
    if (val <= floor ) {
        return false;
    }
    return true;
}

