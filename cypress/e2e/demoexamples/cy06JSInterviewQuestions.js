// 1. can javascript object holds a function as a property? explain with example
// Yes, JavaScript objects can hold functions as properties. These functions are often referred
// to as methods when they are part of an object. Here's an example:
const person = {
  name: "Arun", //property 1
  age: 30, //property 2
  greet: function () {
    //property 3
    console.log("Hello, my name is " + this.name);
  },
};

// In this example, the `person` object has a property called `greet`, which is a function. When we call `person.greet()`, it will execute the function and print "Hello, my name is John" to the console. The `this` keyword refers to the current object (`person`) within the function, allowing us to access its properties.
person.greet(); // Output: Hello, my name is John

// 2 . what are anonymous functions in javascript?
// Anonymous functions in JavaScript are functions that are defined without a name.
// They are often used as values assigned to variables or passed as arguments to other functions.
// Example:
const sayHello = function () {
  // This is an anonymous function assigned to the variable `sayHello`
  console.log("Hello, world!");
};
sayHello(); // Output: Hello, world!
// In this example, we define an anonymous function and assign it to the variable `sayHello`. We can then
// call `sayHello()` to execute the function and print "Hello, world!" to the console.
// Anonymous functions are commonly used in situations where a function is needed temporarily or as a
// callback function.

const greet = function (name) {
  console.log(" Hello, " + name + "!");
};
greet("Alice"); // Output: Hello, Alice!

//3. differences between var, let and const in javascript?
// In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have
// different characteristics:
// 1. Scope:
// - `var` is function-scoped, meaning it is accessible within the function it is declared in.
// If declared outside of a function, it becomes a global variable.
// - `let` and `const` are block-scoped, meaning they are only accessible within the block (enclosed by curly braces) they are declared in.
// 2. Reassignment:
// - `var` and `let` allow reassignment, meaning you can change the value of the variable after it has been declared.
// - `const` does not allow reassignment, meaning once a value is assigned to a `const` variable, it cannot be changed.
// 3. Hoisting:
// - `var` declarations are hoisted to the top of their scope, meaning they can be accessed before they are
// declared (though they will be `undefined` until the declaration is reached).
// - `let` and `const` declarations are also hoisted, but they are not initialized until their declaration is evaluated.0
//  This means that accessing them before their declaration will result in a `ReferenceError`.
// Example:
console.log(x); // Output: undefined (due to hoisting)
var x = 10;
console.log(x); // Output: 10
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Output: 30

// 4. what is the difference between null and undefined in javascript?
// In JavaScript, `null` and `undefined` are both primitive values that represent the absence of a value,
// but they have different meanings:
// - `undefined` is the default value for variables that have been declared but not initialized.
// - `null` is an assignment value that represents no value or no object. It is often used to explicitly indicate that a variable should have no value.
// Example:
let a;
console.log(a); // Output: undefined
let b = null;
console.log(b); // Output: null
// In this example, `a` is declared but not initialized, so it is `undefined`. On the other hand, `b` is explicitly assigned the value `null`, indicating that it has no value.

//5. where are the push, pop, shift and unshift methods used in javascript?
// The `push`, `pop`, `shift`, and `unshift` methods are used with arrays in JavaScript to manipulate the elements of the array.
// - `push`: Adds one or more elements to the end of an array and returns the new length of the array.
// - `pop`: Removes the last element from an array and returns that element. This method changes the length of the array.
// - `shift`: Removes the first element from an array and returns that element. This method changes the length of the array.
// - `unshift`: Adds one or more elements to the beginning of an array and returns the new length of the array.
// Example:
const myArray = [1, 2, 3];
myArray.push(4); // myArray is now [1, 2, 3, 4]
console.log(myArray); // Output: [1, 2, 3, 4]
myArray.pop(); // myArray is now [1, 2, 3]
console.log(myArray); // Output: [1, 2, 3]
myArray.shift(); // myArray is now [2, 3]
console.log(myArray); // Output: [2, 3]
myArray.unshift(0); // myArray is now [0, 2, 3]
console.log(myArray); // Output: [0, 2, 3]

// console.log(myArray.splice(1)); // Output: 4 (new length of the array)
myArray.forEach((element) => {
  console.log(element); // Output: 0, 2, 3
});

console.log(myArray); // Output: 4 (new length of the array)

// 6. is JavaScript Asynchronous? prove it with example
// Yes, JavaScript is asynchronous. This means that JavaScript can execute code without blocking the main thread,
//  allowing for tasks to be performed in the background while other code continues to run.
// One common way to demonstrate this is by using `setTimeout`, which allows you to schedule a function to
// be executed after a certain amount of time has passed.
console.log("Start");
setTimeout(() => {
  console.log("This is an asynchronous message");
}, 2000);
console.log("End");
// In this example, the `setTimeout` function schedules the anonymous function to be executed after 2000 milliseconds (2 seconds). The output will be:
// Start
// End
// This is an asynchronous message
// This demonstrates that the code continues to execute while waiting for the asynchronous operation (the timeout) to complete.

//7. what are callback functions in javascript? explain with example
// Callback functions in JavaScript are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used for handling asynchronous operations, such as API calls, timers, or event listeners.
// Example:
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched from server";
    callback(data); // Call the callback function with the fetched data
  }, 2000); // Simulate an asynchronous operation with a timeout
}
function displayData(data) {
  console.log(data); // Output the data received from the callback
}

function modifyData(data) {
  console.log(data.toUpperCase()); // Output the modified data (in uppercase)
}

fetchData(displayData); // Pass the display
fetchData(modifyData); // Pass the modifyData function as a callback to fetchData

//Data function as a callback to fetchData
// In this example, the `fetchData` function simulates an asynchronous operation (fetching data from a server) using `setTimeout`. Once the data is "fetched", it calls the provided callback function (`displayData`) with the fetched data as an argument. The `displayData` function then logs the data to the console. This demonstrates how callback functions allow us to handle asynchronous operations in JavaScript.

//8 What are promises in JavaScript? explain with example
// Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation
// and its resulting value. They provide a cleaner and more manageable way to handle asynchronous code compared
// to traditional callback functions.
// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure (usually an error).
// Example:
function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Data fetched from server";
      resolve(data); // Resolve the promise with the fetched data
    }, 2000); // Simulate an asynchronous operation with a timeout
  });
}

// In this example, the `fetchData` function returns a new promise. Inside the promise,
// we simulate an asynchronous operation using `setTimeout`. If the operation is successful,
// we call `resolve` with the fetched data. If there were an error, we would call `reject` with an error message.
// We then call `fetchData()` and use the `.then()` method to handle the fulfilled state of the promise,
// logging the data to the console. If there were an error, we would use the `.catch()` method to handle the
// rejected state and log the error message. This demonstrates how promises provide a structured way to
// handle asynchronous operations in JavaScript.

//9.Crate an inhritance between parent and child class in javascript, invok parent constructor in the child class
//
