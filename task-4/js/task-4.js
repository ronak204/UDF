function calculateRectangleArea(length, height) {
    return length * height;
}

const length = 10;
const height = 5;
const area = calculateRectangleArea(length, height);
document.getElementById("rec").innerHTML=+ ("The area of the rectangle is: " + area);
