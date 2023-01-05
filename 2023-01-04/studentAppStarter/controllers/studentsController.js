const express = require("express");
//the capitalized Router returns an object, an instance of a class
const students = express.Router();
// const studentArray = require("../studentData-Dupe");
const studentArray = require("../studentData.json");

students.get("/", (request, response) => {
  response.json(studentArray);
});

//add a route that places a limit on how many students you see at a moment

students.get("/:id", (request, response) => {
  try {
    //determine if the user did not use numbers
    if (!/[0-9]/g.test(request.params.id)) {
      throw "Student id must be all digits";
    }

    //add an if statement that returns an error if the id is not found
    //add an if statement return an error if the id is greater than the length

    let foundStudent = studentArray.students.find(
      (eachStudent) => eachStudent.id === request.params.id
    );
    response.json(foundStudent);
  } catch (error) {
    console.log(error);
  }
});

//   let foundStudent = studentArray.find(
//     (eachStudent) => eachStudent.id === request.params.id
//   );

//   response.send();
// });

module.exports = students;
