// Lodash
const _ = require("lodash");

// only change code below this line

// users nested array with four object starts here

var users = [
  { id: "1", firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { id: "2", firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { id: "3", firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  {
    id: "4",
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female",
  },
];

// users nested array with four object ends here
// getUsers function - list of users start here
function getUsers() {
  var output = "";

  _.forEach(users, function (element) {
    output +=
      element.id +
      " - " +
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
function findUserById(id) {
  try {
    // add appropiate code here

    var user = _.find(users, function (o) {
      return o.id === id;
    });

    if (user === undefined) throw "Cannot read property 'id'";

    var iFindUser = `${user.id} - ${user.firstName} ${user.lastName} is ${user.age}, ${user.gender}`;

    return iFindUser;
  } catch (error) {
    return error; // Change this line

    console.log(error); // Change this line
  }
}
// findUser(lastName, gender) function ends here

// Only change code above this line

getUsers();
var test = findUserById("1");
console.log(test);
module.exports = findUserById;
