
console.log("FizzBuzz exercise starts here!")

function a() { for(var number = 1; number < 101; number++) {
    if (number %5 == 0 && number % 3 == 0) console.log("fizzbuzz")
    else if (number %3 == 0) console.log("fizz");
    else if (number %5 == 0) console.log("buzz");
    else console.log(number);
}}

a();


console.log("The FizzBuzz exercise is completed!")

console.log("Flatten Array exercise starts here!")

const animals = [['🐕', '🐶'], ['😺', '🐈']];

const flatAnimals = animals.flat();
// same as: const flatAnimals = animals.flat(1);

console.log(flatAnimals);

// ['🐕', '🐶', '😺', '🐈']

console.log("Flatten Array exercise is completed!!")