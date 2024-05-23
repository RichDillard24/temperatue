function practice(){
    let num1=99;
    let num2=99;
    if(num1>num2){
        console.log("The num1 is greater than num2")
    }else if(num1<num2){
        console.log("The num2 is greater than num1");
    }else{
        console.log("The values are the same");
    }
}

function getDriveLicnese(){

   let age=prompt("Enter Age:");

   if(age >18){
        console.log("You can get Liscnes")
   }else if(age<18){
        console.log("cant get liscens")
   }
}
  
 
function randomNumber(){
   let randomNumber=Math.floor(Math.random()*10)+1;

   let userGuess=prompt("Guess the Number between 1 and 10");

   if(userGuess==randomNumber){
        console.log("Congratulations! You guessed the number!")
   }else{
        console.log("sorry, that's not correct, The number was" + randomNumber);
   }

}

let userName="richiegd@hotmail.com";
let password="test123";

function Login(){

let unameInput = prompt("Enter your Email:");
let upassInput= prompt("Enter your Password");

if(unameInput===userName && upassInput===password){
    console.log("Welcome to the system");
}else{
    console.log("Invalid credentials");
}
}