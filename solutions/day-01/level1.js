/*This is a solution to level1 of javascript in day-01 of 30-Days-Of-React challenge*/
/*focuses on data types especially arrays*/
/*Declaring an empty array*/
const array = [];
/*declaring an array with more than 5 elements*/
const arrayOf_5 = [1, 2, 3, 4, 5];
/*finding the length of (arrayOf_5) array*/
const lengthOfArrayOf_5 = arrayOf_5.length;
console.log("Length of the array is " + lengthOfArrayOf_5 + " elements");
/*getting the first item, last item, and the middle item of the array*/
const firstItem = arrayOf_5[0];
const lastItem = arrayOf_5[lengthOfArrayOf_5 - 1];
/*getting the middle item, we divide the array length by 2 which is in our case is 5
so 5/2 = 2.5 and we floor this value using math.floor() method to get it to index 2 which is
the middle of our 5 element array*/
const middleItem = arrayOf_5[Math.floor((lengthOfArrayOf_5 / 2))];
/*mixed data type array greater than 5 elements*/
const mixedDataTypes = [1, "string", [1, 2, 3], {
  name: "muhammed",
  age: 25
}, 5, 18];
/*the size of the mixedDataTypes array*/
const lenOfMixedDataTypesArray = mixedDataTypes.length;
console.log(lenOfMixedDataTypesArray);
/*itCompanies array*/
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
/*printing first, middle, last companies in the array*/
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor((itCompanies.length / 2))]);
console.log(itCompanies[itCompanies.length - 1]);
/*printing out each company*/
for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
/*changing all elements of the (itCompanies) array to uppercase and print them out*/
const itCompaniesUpperCase = itCompanies.map((company) => {
  return company.toUpperCase();
})
console.log(itCompaniesUpperCase);
/*stringify the (itCompanies) array*/
console.log(itCompanies.toString() + " are big IT companies");
/*function for checking the existence of a certain company*/
function exist(companies, company) {
  const existence = companies.indexOf(company);
  return existence !== -1 ? company : `${company} is not found`;
}

console.log(exist(itCompanies, "Netflix"));
/*filtering out the companies with more than one 'o' without the filter method*/
/*this is a function to count a certain a letter in a string which is in our case is letter 'o' */
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) === letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

/*this is a for loop to go through the array of companies and at each array index checks if letter
'o' is repeated more than once then, we splice it from the array and decrease the counter i by one
to not skip the shifted element in the array in the new array*/
for (var i = 0; i < itCompanies.length; i++) {
  const letterCount = char_count(itCompanies[i], 'o');
  if (letterCount > 1) {
    itCompanies.splice(i, 1);
    i--;
  }
}

console.log(itCompanies);
/*sorting the (itCompanies) array*/
console.log(itCompanies.sort());
/*reversing the array of companies*/
console.log(itCompanies.reverse());
/*slicing the first 3 elements of the array*/
console.log(itCompanies.slice(0, 3));
/*slicing the last 3 elements of the array*/
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
/*slicing the middle company or companies from the array*/
const middleStart = Math.floor(itCompanies.length - 1) / 2;
console.log(itCompanies.slice(middleStart, (itCompanies.length % 2 === 0) ? middleStart + 2 : middleStart + 1));
/*removing the first company*/
itCompanies.shift();
/*or itCompanies.splice(0,1); */
/*removing the middle company or two from the array*/
itCompanies.splice(Math.floor((itCompanies.length - 1) / 2), (itCompanies.length % 2) === 0 ? 2 : 1);
/*removing the last company*/
itCompanies.pop();
/*removing all the IT companies*/
itCompanies.splice(0, itCompanies.length);
