// mathhs in java script 

//----------------------------------------math.abs()----------------------------------------

// The Math.abs() function returns the absolute value (positive value) of a number.

let num5 = -5;
console.log(Math.abs(num5));



//----------------------------------------math.round()----------------------------------------

// this function is used to round the number into the nearest integer

let num6 = 3.7;
console.log(Math.round(num6));



//----------------------------------------math.ceil()----------------------------------------

// this function is used to round the number into the next integer

let num7 = 3.2;
console.log(Math.ceil(num7));



//----------------------------------------math.floor()----------------------------------------

// this function is used to round the number into the previous integer

let num8 = 3.8;
console.log(Math.floor(num8));



//----------------------------------------math.min()-------------------------------------------

// this function is used to find the minimum number from a list of numbers

console.log(Math.min(5, 2, 9, 1));


//----------------------------------------math.max()-------------------------------------------

// this function is used to find the maximum number from a list of numbers 

console.log(Math.max(5, 2, 9, 1));


//----------------------------------------math.random()-------------------------------------------

// this function is used to generate a random number between 0 and 1

console.log(Math.random());

// to generate a random number between 1 and 10

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// to generate a random number between 10 and 20


let randomNum2 = Math.floor(Math.random() * 11) + 10;
console.log(randomNum2);
