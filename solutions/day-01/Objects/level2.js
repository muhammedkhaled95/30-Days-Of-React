const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node.js'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node.js'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

/*finding the person who has the most skills*/
/*firstly, we need to get an array, which is the entries of users object*/
const usersEntries = Object.entries(users);
/*function takes object entries array and returns the name of the most skilled mostSKilledPerson
which has the highest number of skills*/
function mostSKilledPerson(objectEntries) {
  let mostSkills = 0;
  let key = "";
  for (var i = 0; i < objectEntries.length; i++) {
    if (objectEntries[i][1].skills.length > mostSkills) {
      mostSkills = objectEntries[i][1].skills.length;
      // key = objectKeys[i];
      key = objectEntries[i][0];
    }
  }
  return key;
}
console.log("The person with the most skills is " + mostSKilledPerson(usersEntries));

/*Counting the logged in users*/
function noOfUsersLoggedIn(objectEntries) {
  let count = 0;
  for (var i = 0; i < objectEntries.length; i++) {
    if (objectEntries[i][1].isLoggedIn === true) {
      count++;
    }
  }

  return count;
}

const noOfUsersLoggedInCount = noOfUsersLoggedIn(usersEntries);
console.log("Number of users logged in is "+ noOfUsersLoggedInCount);

/*this function tales object entries array and returns the number of users with 50 or more points*/
function noOfUsersWithMoreThanOrEqualTO_50points(objectEntries) {
  let count = 0;
  for (var i = 0; i < objectEntries.length; i++) {
    if (objectEntries[i][1].points >= 50) {
      count++;
    }
  }

  return count;
}

const usersEqualOrAbove_50 = noOfUsersWithMoreThanOrEqualTO_50points(usersEntries);
console.log("No of users who are equal or above 50 points is " + usersEqualOrAbove_50);


/*finding people who are MERN stack developers from the users object*/
function mernStackPeople(objectEntries) {
  let mernPeople = [];
  for (var i = 0; i < objectEntries.length; i++) {
    if (objectEntries[i][1].skills.includes('Express') && objectEntries[i][1].skills.includes('MongoDB') && objectEntries[i][1].skills.includes('Node.js') && objectEntries[i][1].skills.includes('React')) {
      mernPeople.push(objectEntries[i][0]);
    }
  }
  return mernPeople;
}

const mernStackPeopleArray = mernStackPeople(usersEntries);
console.log("MERN stack people are " + mernStackPeopleArray);
/*********************************************************************************************************************/
/*setting a new user without modifying the original users object*/
/*firstly, we will copy the object users to a new object called newUsers and then modify this new object*/
const newUsers = Object.assign(users);
/*adding a new member*/
newUsers.Muhammed = {
  email: 'muhammed@mokal.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase'],
  age: 25,
  isLoggedIn: false,
  points: 45
}

/*************************************************************************************************************************/
/*getting all keys and properties of the user object is already done above using
Object.entries(object) method which returns an array of arrays when each array element of this array is
an array of 2 elements, the first is the key and the second is the value*/

/*getting the values is done using Object.values(object) method which returns an array of all the keys' values of
our object*/
/**************************************************************************************************************************/
/*using countries_data.js file to print a country name, capital, population, and languages*/
console.log("Country: " + countries[0].name);
console.log("Capital: " + countries[0].capital);
console.log("Languages: " + countries[0].languages);
console.log("Population: " + countries[0].population);
