

function a() { for(var number = 1; number < 101; number++) {
    if (number %5 == 0 && number % 3 == 0) console.log("fizzbuzz")
    else if (number %3 == 0) console.log("fizz");
    else if (number %5 == 0) console.log("buzz");
    else console.log(number);
}}

a();
