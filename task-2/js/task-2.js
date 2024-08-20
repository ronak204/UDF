function calculateCircleArea(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
}
const radius = 5;
const area = calculateCircleArea(radius);
document.getElementById("calc").innerHTML=("The area of the circle is: " + area);
