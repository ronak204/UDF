function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

const celsius = 37;
const fahrenheit = convertCelsiusToFahrenheit(celsius);
document.getElementById("cels").innerHTML=("The temperature in Fahrenheit is: " + fahrenheit);