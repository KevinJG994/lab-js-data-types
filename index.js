/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

let tongueTwister;

// Concatenate the string variables into one new string

tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string

console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

let firstVariable;
let secondVariable;
// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let java1 = part1.slice(0, 3)
let java2 = part1.slice(3).toUpperCase()
firstVariable = java1 + java2;

let script1 = part2.slice(0, 5)
let script2 = part2.slice(5).toUpperCase()
secondVariable = script1 + script2;

// Print the cameLtaiL-formatted string

let result = firstVariable + secondVariable
console.log(result)

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tip = 0.15
let tipAmount = billTotal * tip;
// Print out the tipAmount

let totalAmount = billTotal + tipAmount;
console.log(totalAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
let randomNumber;
// Generate a random integer between 1 and 10 (inclusive)

let generateNumber = (Math.random() * 10)
randomNumber = generateNumber.toFixed()

// Print the generated random number

console.log(randomNumber)


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(expression1 + ' False')

const expression2 = a || b;
console.log(expression2 + ' True')

const expression3 = !a && b;
console.log(expression3 + ' False')

const expression4 = !(a && b);
console.log(expression4 + ' True')

const expression5 = !a || !b;
console.log(expression5 + ' True')

const expression6 = !(a || b);
console.log(expression6 + ' True')

const expression7 = a && a;
console.log(expression7 + ' True')