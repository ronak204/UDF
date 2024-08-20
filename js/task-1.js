function greet(message) {
    if (message) {
        document.getElementById("msg").innerHTML=(message);
    } else {
        document.getElementById("morn").innerHTML=("Good Morning");
    }
}

greet("Hello, welcome!");

greet();