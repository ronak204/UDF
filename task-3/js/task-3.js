function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

const base = 10;
const height = 5;
const area = calculateTriangleArea(base, height);
document.getElementById("area").innerHTML=("The area of the triangle is: " + area);
