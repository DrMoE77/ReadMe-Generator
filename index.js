// TODO: Include packages needed for this application
const inq = require("inquirer"); 

const markdown = require("./utils/generateMarkdown")
const file = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project/application?(required)",
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log("Please enter your project title.");
              return false;
            }
          }
          
    },
    {
        type: "input", 
        name: "description",
        message: "Give a breif description of your project(required)",
        validate: describe => {
            if (describe) {
              return true;
            } else {
              console.log("Please describe your project.");
              return false;
            }
          }
    },
    {
        type: "input", 
        name: "installation",
        message: "please specifcy the installation instructions if any:",
        
    },
    {
        type: "input", 
        name: "usage",
        message: "Specify the use case of this project/application:",
        
    },
    {
        type: "checkbox", 
        name: "license",
        message: "what licence has been used for this project?:",
        choices: ['Apache', 'Mozilla', 'MIT', 'GNU', 'Boost', 'ISC'],
        validate: choice => {
            if (choice.length<=1) {
              return true;
            } else {
              return "select at least one licence";
            }
          }
    },
    {
        type: "input", 
        name: "test",
        message: "Specify the test instructions if any:",
        
    },
    {
        type: "input", 
        name: "contributions",
        message: "Specify contribution instructions if any:",
        
    },
    {
        type: "input", 
        name: "username",
        message: "Please enter your github user name(required):",
        
    },
    {
        type: "input", 
        name: "email",
        message: "Please enter your email (required):",
        
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    file.writeFile("./README.md",markdown (data),function(err){
   if (err) {
       return console.log (err)
   }
   else {
       console.log("your read me file is ready")
   }
})
}



// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then(function(answer){
        const name = answer.title.split(" ").join("")+".md"
        writeToFile(name, answer)
    })
}

// Function call to initialize app
init();
