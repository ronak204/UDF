function checkOddOrEven(number) {
    if (number % 2 === 0) {
        document.getElementById("even").innerHTML=(number + " is even");
    } else {
        document.getElementById("odd").innerHTML=(number + " is odd");
    }
}

checkOddOrEven(7);
checkOddOrEven(10); 
