//function for displaying the license 
function licenseSec(license) {
  //Apache license badge and link
  if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 

  //MIT license badge and link
  else if (license == "MIT") {
    return `[![License used: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 

  //BSD 2-Clause license badge and link
  else if (license == "BSD 2-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } 

  //BSD 3-Clause license badge and link
  else if (license == "BSD 3-Clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } 

  //Boost Software License 1.0 license badge and link
  else if (license == "Boost Software License 1.0"){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }

  //if no license is selected, nothing is returned
  else {
    return ""
  }
}

//function that generates the actual markdown file
//this includes the content of the README file
//..........................................................
function generateREADME(data) {

  return `# ${data.title}
  ${licenseSec(data.license)}

  ## Description
  ${data.desc}

  ## Table of Contents
  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Contributing to this project](#contributions)
  * [Tests](#tests)
  * [Contact](#contact)
  
  ## Usage
  ${data.useCase}

  ## Installation 
  ${data.installing}

  ## License
  ${licenseSec(data.license)}

  ## Contributing to this project
  ${data.contribute}

  ## Tests
  ${data.testing}

  ## Contact
  My GitHub: (https://github.com/${data.gitname}) <br>
  Email me at: ${data.emailId}
`
}
//............................................................

//exporting the js file
module.exports = generateREADME;