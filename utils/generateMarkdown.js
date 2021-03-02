// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Description:
    ${response.license}
    ${response.description}

  ## Installation:
    ${response.installation}

  ## Usage:
    ${response.usage}

  ## License:
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    ${response.license}

  ## Contribution:
    ${response.contribution}

  ## Test:
    ${response.test}

  ## Questions:
   For questions about this README generator, you can visit my GitHub page using the following link:
  
  GitHub Profile - https://github.com/${response.username}

  Also, for additional questions, feel free to contact me via email at: ${response.email}
`;
}

module.exports = generateMarkdown;
