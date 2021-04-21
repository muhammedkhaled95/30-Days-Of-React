const personAccount = {
  firstName: "",
  lastName: "",
  incomes: {
    incomesStream: [],
    description: ""
  },
  expenses: {
    expensesStream: [],
    description: ""
  },
  totalIncome: function() {
    let sum = 0;
    for (var i = 0; i < this.incomes.incomesStream.length; i++) {
      sum += this.incomes.incomesStream[i];
    }
    return sum;
  },
  totalExpense: function() {
    let sum = 0;
    for (var i = 0; i < this.expenses.expensesStream.length; i++) {
      sum += this.expenses.expensesStream[i];

    }
    return sum;
  },
  accountInfo: function() {
    return `FirstName: ${this.firstName} LastName: ${this.lastName} and ${this.accountBalance()}`;
  },
  addIncome: function(incomeToAdd) {
    this.incomes.incomesStream.push(incomeToAdd);
  },
  addExpense: function(expenseToAdd) {
    this.expenses.expensesStream.push(expenseToAdd);
  },
  accountBalance: function() {
    return `Account balance is ${this.totalIncome() - this.totalExpense()} dollars`;
  }
}
/**********************************************************************************************************************/
/*these 2 arrays are used for Q 2, 3, and 4 in level3 of Objects section day-01 in 30DaysOfReact challenge*/
/************************************users array**********************************************************/
const users = [{
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

/*************************************Sign Up function**************************************/
/*this function generates a random string for a unique id for every new user added*/
function makeid(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() *
      charactersLength)));
  }
  return result.join('');
}

function makepassword(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() *
      charactersLength)));
  }
  return result.join('');
}
/***********************************/
function signUp(username, email) {
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username || email === users[i].email) {
      return "You already have an account!"
    }
  }

  let date = new Date();

  let newUser = {
    _id: makeid(6),
    username: username,
    email: email,
    password: makepass(14),
    createdAt: `${(date.getMonth()+1)}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    isLoggedIn: false
  }

  users.push(newUser);
}

/*for testing*/
// signUp("muhammed", "email@emkal.com");
// signUp("khaled", "kal@khal.com");
// console.log(users);

/****************************************Sign In function************************************/
function signIn(username, password) {
  for (var i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      if (password === users[i].password) {
        users[i].isLoggedIn = true;
        return "You are logged in!";
      }
    }
  }
  return "This account doesn't exist, be sure the username and the password are correct!";
}
/**************************************products array************************************/
const products = [{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [{
        userId: 'fg12cy',
        rate: 5
      },
      {
        userId: 'zwf8md',
        rate: 4.5
      },
    ],
    likes: [],
  },
  /*************/
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  /***************/
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{
      userId: 'fg12cy',
      rate: 5
    }],
    likes: ['fg12cy'],
  },
]

/***********************************rateProduct function****************************************/
function rateProduct(userID, productId, rating) {
  for (product in products) {
    if (product._id === productId) {
      product.rating.push({
        userId: userID,
        rate: rating
      });
      break;
    }
  }
}
/*********************************averageRating function*****************************************/
function averageRating(productID) {
  for (product in products) {
    if (productID === product._id) {
      let sum = 0;
      for (rating in product.rating) {
        sum += rating.rate;
      }
      return sum / product.rating.length;
      break;
    }
  }
  return "product doesn't exist";
}

/************************************likeProduct function*************************************/
function likeProduct(userID, productID) {
  for (product in products) {
    if (product._id == productID) {
      if (product.likes.includes(userID)) {
        product.likes.remove(userID)
      } else {
        product.likes.push(userID)
      }
      break;
    }
  }
}
