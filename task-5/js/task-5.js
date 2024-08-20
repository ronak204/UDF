function calculateExpression(a, b, c) {
    return ((b * b) - (4 * a * c)) / (2 * a);
}

const a = 2;
const b = 5;
const c = 3;
const result = calculateExpression(a, b, c);
document.getElementById("exp").innerHTML=("The result of the expression is: " + result);
