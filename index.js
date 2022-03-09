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
