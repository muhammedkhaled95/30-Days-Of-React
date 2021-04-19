/*checking if a certain year is a leap year*/
const year = window.prompt("Enter the year");

function leap(leapYear) {
  return (leapYear % 4 === 0 && (leapYear % 100 !== 0) || (leapYear % 400 === 0));
}
/*checking if the entered month is 30 or 31 or 28(29) day month*/
const month2 = window.prompt("Enter a month to get the number of days in it");
const monthLowerCase = month2.toLowerCase();
switch (monthLowerCase) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(monthLowerCase + " is a 31-day month");
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(monthLowerCase + " is a 30-day month");
    break;
  case "february":
    if (leap(year)) {
      console.log(monthLowerCase + " is 29 day month since "+ year+ " is a leap year");
    } else {
      console.log(monthLowerCase + " is 28 day month");
    }
    break;
}
/***************************************************************************************/
