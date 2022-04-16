<<<<<<< HEAD
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
=======
//required packages for the code
const fs = require('fs');
const inq = require('inquirer');
const generateFile = require("./utils/generateREADME");

//questions for users to create a readme file
const quesForUser = [
  //first question - entering the title
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project? (Required)",
        //as this is a required question, if nothing is entered by the user, the same question is asked again
        validate: title => {
          if (title) {
            return true;
          } else {
            console.log("Please enter your project title.");
            return false;
          }
        }
      },

    //second question - entering the description 
      {
        type: "input",
        name: "desc",
        message: "Briefly give an explanation of your project. (Required)",
        //as this is a required question, if nothing is entered by the user, the same question is asked again
        validate: description => {
          if (description) {
            return true;
          } else {
            console.log("Please write a short description.");
            return false;
          }
        }
      },

      //third question - use case for the project
      {
        type: "input",
        name: "useCase",
        message: "Enter a use case for this project:",
      },

    //fourth question - entering any installion instructions
      {
        type: "input",
        name: "installing",
        message: "Provide any installation instructions here:",
      },
    
    //fifth question - license used 
      {
        type: 'checkbox',
        name: 'license',
        message: 'License used for this project: (Required)',
        choices: ['Apache', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software License 1.0'],
        //as this is a required question, if nothing is entered by the user, the same question is asked again
        validate: choice => {
          if (choice.length <= 1) {
            return true;
          } else {
            return "Please select one license!";
          }
        }
      },

    //sixth question - contribution
      {
        type: "input",
        name: "contribute",
        message: "What should one do to contribute to your project: ",
      },

    //seventh ques - testing
      {
        type: "input",
        name: "testing",
        message: "Are there any testing instructions: ",
      },

    //last ques - user info (email and github username)
      {
        type: "input",
        name: "gitname",
        message: "Enter your GitHub username (not the web link) (Required)?",
        //as this is a required question, if nothing is entered by the user, the same question is asked again
        validate: gitname => {
        if (gitname.length <= 1) {
          return true;
        } else {
          return "Please enter your GitHub username!";
        }
      }
      },
      {
        type: "input",
        name: "emailId",
        message: "Enter your Email id (Required)?",
        //as this is a required question, if nothing is entered by the user, the same question is asked again
        validate: emailId => {
          if (emailId.length <= 1) {
            return true;
          } else {
            return "Please enter your Email id!";
          }
        }
      }
];

// writing all the info entered by users in the readme file
function write(file, data) {
    fs.writeFile("./README.md", generateFile(data), function(err) {
      //incase there is an error in the file
        if (err) {
          return console.log(err);
        }
      //otherwise success!
        else{
          console.log('Your README file has been successfully generated in your project folder!');
        }
      });
}

//function to initialize the application
function init() { 
    inq.prompt(quesForUser).then(function(userAnswers) {
      const file = userAnswers.title.split(' ').join('') + '.md';
      write(file, userAnswers);
    });
}

//initializing the app
init();
>>>>>>> b60289d6b66ce9c78ed3b0243438aefac97344ae
