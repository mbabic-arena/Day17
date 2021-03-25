const _ = require("lodash");

// only change code below this line

// users nested array with four object starts here

var users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male" },

  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },

  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },

  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

// users nested array with four object ends here

// getUsers function - list of users start here

function getUsers() {
  var output = "";

  _.forEach(users, function (element) {
    output +=
      element.firstName +
      " " +
      element.lastName +
      " is " +
      element.age +
      ", " +
      element.gender +
      "\n";
  });

  console.log(output);

  return output;
}

// getUsers function - list of users ends here

function findUser(lastName, gender) {
  try {
    // add appropiate code here

    var user = _.find(users, function (o) {
      return o.lastName === lastName && o.gender === gender;
    });

    if (user === undefined)
      throw "Cannot read property 'firstName' of 'undefined'";

    var iFindUser = `${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;

    return iFindUser;
  } catch (error) {
    console.log(error); // Change this line

    return error; // Change this line
  }
}

// findUser(lastName, gender) function ends here

// Only change code above this line

getUsers();
var test = findUser("Carrey", "male");
console.log(test);
module.exports = findUser;
