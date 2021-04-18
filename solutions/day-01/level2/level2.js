/*accessing countries and web_techs js files by using an external links in index.html file
and we can see the output of both arrays in the broweser's console*/
//console.log(countries);

/*part 2 of level 2*/
/*splitting the string into an array of strings and get its length*/
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.split(" ");
/*outputting the (words) array without the comma special character in the array elements*/
const wordsWithoutCommas = [];
for (var i = 0; i < words.length; i++) {
  wordsWithoutCommas[i] = words[i].replace(",", "");
}
console.log(wordsWithoutCommas);
console.log(words.length);
/*part 3 of level 2 (shopping cart)*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
/*adding Meat element to the beginning of the array if it doesn't exist,
checking existence using includes method which returns true or false*/
if (!(shoppingCart.includes("Meat"))) {
  shoppingCart.unshift("Meat");
}

/*adding sugar element to the end of the array if it doesn't exist,
checking existence using indexOf method which return -1 if the element doesn't exist*/
if (shoppingCart.indexOf("Sugar") === -1) {
  shoppingCart.push("Sugar");
}

console.log(shoppingCart);
/*removing Honey if allergic*/
const allergic = true;
if (allergic === true) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

console.log(shoppingCart);
/*modifying Tea to Green Tea*/
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);
/*checking if Ethiopia exists in the countries list in countries.js files*/
/*it it does, return the element's value ("Ethiopia")*/
/*it it doesn't add it to the list*/
function checkEthiopia() {
  if (countries.indexOf("Ethiopia") === -1) {
    countries.push("Ethiopia");
  } else {
    console.log("Ethiopia");
  }
}
checkEthiopia();

/*checking is "Sass" exists in the webTechs array*/
/*if it does, print out "Sass is a CSS preprocess"*/
/*it it doesn't, add it to the array and print out the array*/
function checkSass() {
  if (webTechs.indexOf("Sass") === -1) {
    webTechs.push("Sass");
    console.log(webTechs);
  } else {
    console.log("Sass is a CSS preprocess");
  }

}

checkSass();
checkSass();

/*concatinating 2 variables in a new variable and print it out*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
