function renderLicenseBadge(license) {
    let badge = "";
    if(license != "None") {
      badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
    }
    return badge;
  }
  
  function renderLicenseLink(license) {
    let licenseLink;
  
    switch(license) {
      case "MIT":
        licenseLink = "https://mit-license.org/";
        break;
      case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "GPL":
        licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
      case "Apache":
        licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
        break;
      default:
        licenseLink = "";
        break;      
    }
    return licenseLink = "";
  }
  
  function renderLicenseSection(license) {
    let licenseSect = "";
  
    if (license != "None") {
      licenseSect += "## License\n"
      licenseSect += "For more information vist " + renderLicenseLink(license);
    }
    return licenseSect;
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
    # <${data.project}>
  
  ## Description
  - ${data.motivation}
  - ${data.elaborate}
  - ${data.solve}
  - ${data.learn}
  
  ## Table of Contents (Optional)
  
  - ${data.install}
  - ${data.uses}
  - ${data.credit}
  - ${data.license}
  
  ## Credits
  
  -${data.colab}
  
  ## License
  
  ${renderLicenseBadge(data.license)}
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  -${data.badges}
  
  ## Features
  
  -${data.features}
  
  ## How to Contribute
  
  ${data.gh}
  
  ${data.email}
  ## Tests
  
  `;
  }
  
  module.exports = generateMarkdown;