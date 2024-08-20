function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

const fahrenheit = 98;
const celsius = convertFahrenheitToCelsius(fahrenheit);
document.getElementById("conv").innerHTML=("The temperature in Celsius is: " + celsius);
