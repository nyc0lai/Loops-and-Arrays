// 1) Display numbers from 1 to 10

console.log('1) Display numbers from 1 to 10');
const numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers.join(' '));

// 2) Print the odd numbers less than 100

console.log('2) Print the odd numbers less than 100');
const oddnumbers = [];
for (let i = 100; i >= 1; i--) {
    if (i%2 !== 0)
    oddnumbers.push(i);
}
console.log(oddnumbers.join(' '));

// 3) Print the multiplication table with 7

console.log('3) Print the multiplication table with 7');

for(let i = 1; i <= 10; i++){
    let result = i*7;
    console.log(`7 x ${i} = ${result}`);
}

// 4) Print all the multiplication tables with numbers from 1 to 10
console.log('4) Print all the multiplication tables with numbers from 1 to 10');
for(let i = 1; i <=10; i++) {
    console.log(`multiplication table with ${i}`);
    for(let j = 1; j <= 10; j++) {
        let result = i*j;;
        console.log(`${i} x ${j} = ${result}`);
    }
}

// 5) Calculate the sum of numbers from 1 to 10
console.log('5) Calculate the sum of numbers from 1 to 10');

console.log('we have the matrice with numbers from point (1)',numbers);

const sum = numbers.reduce((cumul, curent) => {return cumul+curent;}) 
console.log(numbers.join('+'),`= ${sum}`);

// 6) Calculate 10!

