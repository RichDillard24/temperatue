console.log('script')

// var userName;
// userName = prompt('enter your name')
// console.log(userName);

// userName=15;

const number1 = parseFloat(prompt("enter first number"));
const number2 = parseFloat(prompt("enter second number"));

const operator = prompt("enter operator ( either +,-,* or / ): ");

let result;

if (operator=='+') {
   result= number1 + number2;
}
else if (operator=="-") {
    result= number1 - number2;
}
else if (operator=="*") {
    result= number1 * number2;
}
else {
    result= number1 / number2;
}


console.log('the result is:' + result);