/*user input age feedback propblem*/
const age = window.prompt("Enter your age: ");
if(age >= 18){
  console.log("You are old enough to drive");
}
else{
  console.log("You are left with "+ (18-age) + " years to drive");
}

/*comparing my age to your age*/
const myAge = window.prompt("My age is: ");
if(age > myAge){
  console.log("your are "+ (age-myAge) + " years older than me.");
}
else if(myAge > age){
  console.log("I am "+ (myAge-age)+ " years older than you." )
}
else{
  console.log("we are of the same age.");
}
/*comparing 2 values using if else and ternary operator*/
/*firstly, using if else*/
let a = 6;
let b = 5;
if(a > b){
  console.log("a is greater than b");
}
else if(b > a){
  console.log("b is greater than a");
}
else{
  console.log("a and b are equal");
}
/*secondly, using ternary operator*/
console.log(a > b? a===b? "a and b are equal" : "a is greater than b" : a===b? "a and b are equal" : "b is greater than a");

/*checking numbers for being odd or even*/
const number = window.prompt("Enter a number to check if even or odd");

if(number % 2 === 0){
  console.log(number + " is an even number");
}
else{
  console.log(number + " is an odd number");
}
