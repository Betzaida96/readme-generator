//creates a function that returns a licnese badge from the license you pick
function renderLicensesBadge(licenses) {
    if (licenses !== "none") {
        return `![GitHub license](https://img.shields.io/badge/License-${licenses}-blue.svg)`;
    }
    return "";
}

//creating a function that will generate your README
function generateREADME(data) {
    const licenseBadge = renderLicensesBadge(data.licenses);
    const tableOfContents = `
## Table of Contents
* [Installation](#installation)
* [Tests](#tests)
* [Usage](#usage)
* [Contributions](#contributions)
* [Questions](#questions)
`;

    return `# ${data.project}
${licenseBadge}

## Description
${data.description}

${tableOfContents}

## Installation
${data.installation}

## Tests
${data.tests}

## Usage
${data.usage}

## Contributions
${data.contributions}

## License
License used: ${data.licenses}

## Questions
If you have any questions, feel free to reach out to ${data.name} at <a href="mailto:${data.email}">${data.email}</a> or <a href="https://github.com/${data.username}">${data.username}</a>.
`;
}

//This exports the generateREADME function so that it can be used in other files/modules.
module.exports = generateREADME;