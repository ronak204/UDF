function calculateExpression(a, b) {
    return (a * a) + (2 * a * b) + (b * b);
}

const a = 3;
const b = 4;
const result = calculateExpression(a, b);
document.getElementById("result").innerHTML=("The result of the expression is: " + result);
