// Renders License Badge
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
// Renders License Link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  }
  return "";
}
// Renders License Section
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
// Creates the Markdown File
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
`;

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
