/**
 * This file represents our Express API application
 *
 * TODOs:
 * - [] Create routes (using hardcoded JSON for now, not a real db):
 *  - [] Health check route to confirm the server is up and running
 *  - [] Get all students
 *  - [] Get student by ID
 *
 * - [] Organize our app into controller and query layers
 * - [] Use a router to organize the routes by their prefixes (/students, /teachers, /posts, etc.)
 */

//express is a backend frameword
const express = require("express");

// Initialize app and general app configuration
//app creates an object
const app = express();

app.use(express.json()); // Why do we need this?

const studentsControllers = require("./controllers/studentsController");

app.use("/students", studentsControllers);

//remove these but implement in folder for server building
//:dynamic
// app.get("/removeVowels/:word", (request, response) => {
//   //take the request.params
//   //execute the remove vowels function
//   //send the updated word

//   let updatedString = "";

//   //word.replace([aeiou]/gi,"")

//   //loop through the word and find the vowels
//   for (const eachValue of request.params.word) {
//     if (!eachValue.match(/[aeiouAeiou]/)) {
//       updatedString += eachValue;
//     }
//   }
//   //response send expects a string
//   response.send(updatedString);
// });

// app.get("/giveANumberAndMultiplyBy5/:number", (request, response) => {
//   let newNumber = Number(request.params.number);
//   let multipliedNumber = newNumber * 5;
//   const stringifiedNumber = String(multipliedNumber);

//   response.send(stringifiedNumber);
// });

// Route handler functions
app.get("/", (request, response) => {
  response.json({ message: "Service is running" });
});

module.exports = app;
