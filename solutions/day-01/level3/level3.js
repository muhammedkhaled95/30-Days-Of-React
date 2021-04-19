/*an array of 10 student ages*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
/*find the minimum age in the array*/
function minAge(arrayOfAges){
  var min = arrayOfAges[0];
  for(var i = 1; i < arrayOfAges.length; i++){
    if(arrayOfAges[i] < arrayOfAges[i-1]){
      min = arrayOfAges[i];
    }
  }
  return min;
}
const minimum = minAge(ages);
console.log("Minimum age = " + minimum);
/*find the maximum age in the array*/
function maxAge(arrayOfAges){
  var max = arrayOfAges[0];
  for(var i = 1; i < arrayOfAges.length; i++){
    if(arrayOfAges[i] > arrayOfAges[i-1]){
      max = arrayOfAges[i];
    }
  }
  return max;
}
const maximum = maxAge(ages);
console.log("Maximum age = " + maximum);
/*find the median age of the ages array*/
function findMedian(arrayOfAges){
  if(!(arrayOfAges.length % 2)){
    let firstMiddle = Math.floor((arrayOfAges.length - 1) / 2);
    return (arrayOfAges[firstMiddle]+arrayOfAges[firstMiddle + 1]) / 2;
  } else{
    return arrayOfAges[Math.floor(arrayOfAges.length / 2)];
  }
}

const median = findMedian(ages);
console.log("median = " + median);
/*find the average of ages*/
function average(arrayOfAges){
  let sum = 0;
  for(var i = 0; i < arrayOfAges.length; i++){
    sum += arrayOfAges[i];
  }
  return sum / arrayOfAges.length;
}

const avg = average(ages);
console.log("average = " + avg);
/*finding the range of ages(max - min)*/
const range = maximum - minimum;
console.log("Range = " + range);
/*the values of (min - average) and (max - average)*/
const minMinusAvg = Math.abs(minimum - avg);
const maxMinusAvg = maximum - avg;
console.log("minimum - average = " + minMinusAvg);
console.log("maximum - average = " + maxMinusAvg);
/*******************************************************************************************************/
/*Manipulation of countries array in countries.js file*/
/*slicing the first ten countries in countries array*/
const firstTenCountries = countries.slice(0,10);
console.log(firstTenCountries);

/*finding the middle country(ies) in the countries array*/
function middleCountries(countriesArray){
  if(countriesArray.length % 2 === 0){
    let firstMiddle = (countriesArray.length / 2) - 1;
    return countriesArray.slice(firstMiddle, firstMiddle + 2 );
  }else{
    return countriesArray[Math.floor(countriesArray.length / 2)];
  }
}

console.log(middleCountries(countries));

/*dividing the countries array to 2 arrays equally if even,
if the countries array is not even, the first half array is more by one country*/

if(countries.length % 2 === 0){
  const firstHalfEven  = countries.slice(0, countries.indexOf(middleCountries(countries)[1]));
  const secondHalfEven = countries.slice(countries.indexOf(middleCountries(countries)[1]), countries.length);
  console.log("length of first half even case " + firstHalfEven.length);
  console.log("length of second half even case " + secondHalfEven.length);
}else{
  const firstHalfOdd = countries.slice(0, countries.indexOf(middleCountries(countries)) + 1);
  const secondHalfOdd = countries.slice(countries.indexOf(middleCountries(countries)) + 1, countries.length);
  console.log("length of first half odd case " + firstHalfOdd.length);
  console.log("length of second half odd case " + secondHalfOdd.length);
}
