// 1) Display numbers from 1 to 10
console.log("1) Display numbers from 1 to 10:");

for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("");

// 2) Print the odd numbers less than 100
console.log("2) Print the odd numbers less than 100");
for(let i = 100; i >= 0; i--){
    if(i%2 !== 0)
    console.log(i);
}
console.log("");

// 3) Print the multiplication table with 7
console.log("3) Print the multiplication table with 7");

for(let i = 1; i <= 10; i++)
console.log(`7 x ${i} = ${7*i}`);
console.log("");

// 4) Print all the multiplication tables with numbers from 1 to 10
console.log("4) Print all the multiplication tables with numbers from 1 to 10");

for(let i = 1; i <= 10; i++){
    console.log(`Multiplication tables with ${i}` )
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
console.log("");

// 5) Calculate the sum of numbers from 1 to 10
console.log("5) Calculate the sum of numbers from 1 to 10");

const sumTo = (n) => {
    if(n < 1){
        return 0;
    } else {
        return sumTo(n-1)+n;
    }
}
console.log('Sum of numbers 1 to 10 is '+sumTo(10));
console.log("");

// 6) Calculate 10!
console.log("6) Calculate 10!");
function getFactorial(n) {
    if(n < 1) {
        return 1;
    } else {
        return getFactorial(n-1)*n;
    }
    };
console.log("10! = "+getFactorial(10));
console.log("");

// 7) Calculate the sum of odd numbers greater than 10 and less than 30
console.log("7) Calculate the sum of odd numers greater than 10 and less than 30");

const oddNumbers = [];
for (let i = 10; i < 30; i++){
    if(i%2 !== 0)
    oddNumbers.push(i);
}
const sumOdd = oddNumbers.reduce((num1, num2) => num1 + num2);
 
console.log(oddNumbers.join('+'),'=', sumOdd);
console.log("");

// 8) Calculate the sum of numbers in an array of numbers
console.log("8) Calculate the sum of numbers in an array of numbers");

const numbersArray = [];

for (let i = 0; i < 15; i++){
        numbersArray.push(Math.floor(Math.random()*50));
}
const sumOfNumbers = numbersArray.reduce((num1, num2) => num1+num2);
console.log(numbersArray.join('+'),"=", Math.round(sumOfNumbers,2));
console.log("");

// 9) Calculate the average of the numbers in an array of numbers
console.log("9) Calculate the average of the numbers in an array of numbers");
console.log("We use the 8 point numbers array");
console.log("average of numbers ",numbersArray.join(" "), "is", (sumOfNumbers/numbersArray.length).toFixed(2));
console.log("");

// 10) Create a function that receives an array of numbers and returns an array containing only the positive numbers
console.log("10) Create a function that receives an array of numbers and returns an array containing only the positive numbers");

const positiveAndNegative = [10, -23, 16, 14, -1, 0, -33, 66, -2];
console.log(positiveAndNegative.join(" "));
const onlyPositive = positiveAndNegative.filter(number => number >= 0);
console.log("Positive number is:", onlyPositive.join(" "));
console.log("");

// 11) Find the maximum number in an array of numbers
console.log("11) Find the maximum number in an array of numbers");
console.log("We use the 10 point numbers array");
console.log ("Max. number is:",Math.max(...positiveAndNegative));
console.log("");

// 12) Create a function that will return a Boolean specifying if a number is prime
console.log("12) Create a function that will return a Boolean specifying if a number is prime");

function primeNumber (number) {
    if(number === 1){
        return false;
    }else if(number === 2) {
        return true;
    } else {
    for (let i = 2; i < number; i++) {
        if (number%i === 0)
        {
            return false;
            }
        }
    return true;}
}
console.log(primeNumber(5));

// 13) Calculate the sum of digits of a positive integer number
console.log("13) Calculate the sum of digits of a positive integer number");

const posNegatNumbers = [-1, 0, -3.5, 4.11, 6.6, 66, -10, 13, 201];

const clear = posNegatNumbers.map(number => {
    if(number > 0 && Number.isInteger(number)) {
    return number;
    } else {return 0;}
}
);

const sumResult = clear.reduce((num1, num2) => num1 + num2);
console.log(posNegatNumbers.join("; "));
console.log(`Sum of positive integer digits is: ${sumResult}`);
console.log("");

// 14) Print the first 100 prime numbers
console.log("14) Print the first 100 prime numbers");

for(let i = 1; i < 100; i++){
    if (primeNumber(i))
    console.log(i)
}
console.log("");

// 15) Rotate an array to the left 1 position
console.log("15) Rotate an array to the left 1 position");

const rotateLeft = (arr, counts) => {
    console.log(arr);
    for(let i = 0; i < counts; i++) {
        const frontItem = arr.shift();
        arr.push(frontItem);
    }
    return arr;
}
console.log(rotateLeft(["H","E","L","L","O"], 1));
console.log("");

// 16) Reverse an array
console.log("16) Reverse an array");

const reversArray = ["H","E","L","L","O"," ","W","O","R","L","D"];
console.log(reversArray);
console.log(reversArray.reverse());
console.log("");

// 17) Create a function that will merge two arrays and return the result as a new array
console.log("17) Create a function that will merge two arrays and return the result as a new array");

const combineTwoArray = (word1, word2) => word1.concat(word2);

console.log(combineTwoArray("Hello ", "World!"));
console.log("");

// 18) Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

console.log("18) Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both");
//varianta 1
const compare = (item1, item2) => {
 const newArray1 = [];
 const newArray2 = [];
 for(let i = 0; i < item1.length; i++){
    if(!item2.includes(item1[i]))
        newArray1.push(item1[i])
    }
for(let j = 0; j < item2.length; j++){
    if(!item1.includes(item2[j]))
        newArray2.push(item2[j])
    }
  return newArray1.concat(newArray2);  
}

//varianta 2
const compare2 = (fisrst, second) => {
    const newArray1 = fisrst.filter(namba => !second.includes(namba));
    const newArray2 = second.filter(namba => !fisrst.includes(namba));
    return newArray1.concat(newArray2);
}

console.log(compare2([1,2,3,4], [1,3,6,7,8,2]));
console.log("");

// 19) Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
console.log("19) Create a function that will receive an array of numbers as argument and will return a new array with distinct elements");

const distinct = (numbers) => {
const distinctArray = numbers.map(namba => namba*11);
    return distinctArray;
}

console.log(distinct([1,55,8,3,14,2,7,6,4,11]));
console.log("");

// 20) Create a function that will return the number of words in a text
console.log("20) Create a function that will return the number of words in a text");

const countWords = words => words.split(" ").length;
console.log("Create a function that will receive an array of numbers as argument and will return a new array with distinct elements");
console.log(countWords("Create a function that will receive an array of numbers as argument and will return a new array with distinct elements"), "words");

//finish, huh