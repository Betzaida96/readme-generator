//create a function that returns a licnese badge from the license you pick
function renderLicensesBadge(licenses) {
    if (licenses !== "none") {
        return `[![Gitbub license] (https://img.shields.io/badge/License-${licenses}-blue)]`;
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

## Questions
If you have any questions, feel free to reach out to <a href="mailto:${data.email}">${data.email}</a> or find me on GitHub at <a href="https://github.com/${data.username}">${data.username}</a>.
`;
}

module.exports = generateREADME;