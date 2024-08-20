function swapValues(a, b) {
    document.getElementById("Before").innerHTML=("Before swap: a = " + a + ", b = " + b);

    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById("After").innerHTML=("After swap: a = " + a   + ", b = " + b);
}

let a = 5;
let b = 3;
swapValues(a, b);   