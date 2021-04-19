const score = window.prompt("What's your score?");

if(score >= 80 && score <=100){
  console.log("your grade is A");
}
else if(score >= 70 && score < 80){
  console.log("your grade is B");
}
else if(score >= 60 && score < 70){
  console.log("your grade is C");
}
else if (score >= 50 && score < 60){
  console.log("your grade is D");
}
else if (score >= 0 && score < 50){
  console.log("your grade is F");
}
else{
  console.log("not a valid grade");
}
/********************************************************************************/
/*checking the season using the user input month*/
const month = window.prompt("Enter the month to check its season");

switch(month){
  case "september":
  case "october":
  case "november":
    console.log("the season is Autumn");
    break;
  case "december":
  case "january":
  case "february":
    console.log("the season is Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("the season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("the season is Summer");
    break;
  default:
    console.log("enter the right season");
    break;
}

/*checking if a day is a weekend day or a working day*/
const day = window.prompt("Enter the day");
const dayToLowerCase = day.toLowerCase();
switch(dayToLowerCase){
  case "saturday":
  case "sunday":
    console.log("it's a weekend day, HAVE FUN");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("it's a working day, HARD WORK PAYS OFF");
    break;
}
