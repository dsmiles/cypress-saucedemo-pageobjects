# Cypress Saucedemo with Page Objects

Example Cypress web automation project.

## Table of Contents

- [Introduction](#introduction)
- [Testing Strategy](#testing-strategy)
- [Automation shortcuts](#automation-shortcuts)
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [Running the tests](#running-the-tests)
- [Known Issues << important](#known-issues)
- [Workaround](#workaround)
- [GitHub Actions](#github-actions)
- [Information](#information)

### Introduction

This repo contains an example of how to incorporate page objects into a Cypress E2E project.
- [Cypress](https://www.cypress.io) is used for running automation tests.
- The example makes use of the SauceLabs demo website [here](http://www.saucedemo.com).
- Tests can be executed on Chrome, Chromium, Electron and Firefox browsers running on macOS, Windows and Linux.
- Implemented pipeline using GitHub Actions to run the tests on Chrome and Firefox whenever a change is pushed to the repository.

### Testing Strategy

Before writing any E2E tests, my testing strategy was to visually document the site's most important areas for test coverage. I documented all the web pages and made notes on the functionality that needed testing on each.

![Site map of Saucedemo Website](/assets/images/Saucedemo-Page-Map.png)
*Sitemap Made with MindNode v.2.5.8*

Thinking through the application upfront makes writing tests much more straightforward. It allowed me to break up the work into smaller tasks. Visual documentation, such as the diagram above, provides a 'map' that offers a high-level overview of the application's testing surface, aiding in understanding the overall structure.

After documenting the functionality from each view or page, I was able to  determine the various paths or scenarios a user could take through the application. 
For example, a user logging on, browsing for products, buying an item, and then logging off. 
The scenario could touch many different functions of the application, such as the UI, an API, or a database. 

### Automation shortcuts
As part of the process, I also looked for 'automation shortcuts' that would allow me to bypass parts of the application to avoid having to use the UI to build up the state for a test.

For example:

- **Logon process**

   This application store valid usernames in a cooke called `session-state`. Can I set this value and bypass the logon page? No, I can't.


- **Adding items to the shopping cart**

   This application stores the selected inventory items as an array of integer values in a key-value pair in LocalStorage called `cart-contents`. Can I set this value and bypass the add/remove steps? Yes, I can.


- **Jumping directly to pages**

   I identified the various 'routes' to the different pages in the application. Can I jump directly to a page using the `cy.visit()` command? No, I can't and  I've tried.


- **APIs**

   Are there APIs I can use in my automation to set application state? No, there aren't.


- **What has been unit tested?**
  
  What has already been united tested? Unit tests may have already tested multiple goog/bad logon scenarios. No point writing multiple UI level tests for the same thing.  No information was available on the demo website so I made some assumptions.

Unfortunately, the only shortcut that I could exploit was the shopping cart. All the rest in the demo website are blocked at an application level. Shame :-(

### Prerequisites

This example was written using the following components:

- Node.js v18.17.0
- Cypress v13.6.2

For details refer to the Cypress website under [System requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

### Installation

To install Cypress, open a terminal windows and enter the command:

```
npm install cypress --save-dev
```

**OR**

Clone this repository on your local machine, open a terminal windows and enter the command:

```
npm install
```

### Running the tests

- To run the test from the Cypress UI in interactive mode, open a terminal window and enter the command:

```
npx cypress open
```

- To run the test from a Chrome browser, open a terminal windows and enter the command:

```
npm run cypress:chrome
```

- To run the test from a Firefox browser, open a terminal window and enter the command:

```
npm run cypress:firefox
```

**Note:** Refer to the `package.json` file for the above `npm` script commands and their mapping.

## Known issues

1. There is a problem with 'Cypress getting stuck at cy.visit()' when accessing the website ([#27501](https://github.com/cypress-io/cypress/issues/27501))

    - The issue exists with the following version combinations:
        - Cypress 13.6.2
        - Chrome 120.0.6099.216
        - Firefox 121.0.1
    - Occurs on macOS, Linux and Windows

2. CI Issue with Firefox. Runs locally in Firefox, but fails intermittently executing the cy.visit() command when loading the website. It appears to be related to the issue mentioned above.

## Workaround

- As a workaround I installed Chromium 116.0.5845.0 and executed my tests locally.

## GitHub Actions

Implemented a simple pipeline using GitHub Actions to run the test suite on Chrome and Firefox whenever a change is pushed to the repository.

The steps are:
- Check out the code from the repo
- Setup a container to run on Ubuntu
- Set up the pre-reqs for Cypress using the Action Scripts for each web browser
- Execute the E2E tests for each web browser (sequentially)
- Collect the Cypress screenshots as artifacts (if failed)

There is a CI Issue with Firefox. Runs fine locally in Firefox, but fails intermittently executing the cy.visit() command to load the website. 

## Information

This example was written on macOS Monterey (v12.7.2) running on a Mac mini (Late 2014) model.
It has also been tested on Windows 11 and Ubuntu Desktop 22.04.3 LTS.
