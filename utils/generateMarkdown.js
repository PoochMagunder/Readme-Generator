// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge =
      "![License Badge](https://shields.io/badge/license-" +
      license +
      "-green)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'None') {
    return `* [License](#license)`
  }
  return ''

  // let licenseLink;

  // switch (license) {
  //   case "MIT":
  //     licenseLink = "https://mit-license.org/";
  //     break;
  //   case "BSD":
  //     licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  //     break;
  //   case "GPL":
  //     licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  //     break;
  //   case "Apache":
  //     licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
  //     break;
  //   default:
  //     licenseLink = "";
  //     break;
  // }

  // return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License\n";
    licenseSection +=
      "Please see " +
      renderLicenseLink(license) +
      " to get detailed information for this license\n";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function createMarkDown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
${renderLicenseLink(data.license)}
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.guidelines}

## Tests
${data.test}


${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}

## Questions
${data.github}
${data.email}
`




  // const sections = [
  //   "Description",
  //   "Installation",
  //   "Usage",
  //   "Contributions",
  //   "Tests",
  //   "License",
  //   "Questions",
  // ];

  // var markdown = "# " + data.title + "\n";

  // // add table of contents
  // markdown += "## Table of Contents\n";
  // for (let i = 0; i < sections.length; i++) {
  //   if (!(sections[i] === "License" && data.license === "None")) {
  //     markdown +=
  //       i +
  //       1 +
  //       ". [" +
  //       sections[i] +
  //       "](#" +
  //       sections[i][0].toLowerCase() +
  //       sections[i].substring(1) +
  //       ")\n";
  //   }
  // }
  // markdown += "\n";

  // // add description
  // markdown += "## " + sections[0] + "\n";
  // markdown += data.description + "\n";
  

  // // add installation
  // markdown += "## " + sections[1] + "\n";
  // markdown += data.installation + "\n";

  // // add usage
  // markdown += "## " + sections[2] + "\n";
  // markdown += data.usage + "\n";

  // // add contributing
  // markdown += "## " + sections[3] + "\n";
  // markdown += data.guidelines + "\n";

  // // add testing
  // markdown += "## " + sections[4] + "\n";
  // markdown += data.test + "\n";

  // // add license
  // markdown += renderLicenseSection(data.license) + "\n";

  // // add questions
  // markdown += "## " + sections[6] + "\n";
  // markdown +=
  //   "You can find more of my work [HERE](https://github.com/" +
  //   data.github +
  //   ") on Github\n";
  // markdown +=
  //   "You can email me at " + data.email + " with any additional questions.\n";
  // return markdown;
 }

module.exports = createMarkDown;
