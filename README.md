# React/create-react-app/Redux/TravisCI/Heroku/VSCode boilerplate

Boilerplate code and installation instructions for a quick setup of a walking skeleton for a TDD process using create-react-app/Redux/TravisCI.

"A 'walking skeleton' is an implementation of the thinnest possible slice of real functionality that we can automatically build, deploy and test end-to-end." Source: Cockburn, Alistair. Crystal Clear: A Human-powered methodology for small teams, 2004.

It is ready to use with TDD with the basic setup for unit, integration and end to end tests.

|            | Status                                                                                                                                                                                                   |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CI service | [![Build Status](https://travis-ci.org/ivanarielcaceres/bootcamp-gdg-frontend.png?branch=master)](https://travis-ci.org/ivanarielcaceres/bootcamp-gdg-frontend)                                          |
| Tests      | [![Coverage Status](https://coveralls.io/repos/github/ivanarielcaceres/bootcamp-gdg-frontend/badge.svg?branch=master)](https://coveralls.io/github/ivanarielcaceres/bootcamp-gdg-frontend?branch=master) |

## Live demo

[View the live demo on Heroku](https://bootcamp-gdg-frontend.herokuapp.com/) or the [individual UI components](https://ivanarielcaceres.github.io/bootcamp-gdg-frontend) of my Storybook on Github Pages.

## Tech stack

- Create-react-app, which includes: React, JSX, ES6, Webpack, Babel and other amazing projects.
- Prettier Code Formatter + ESLint setup with Airbnb's style guide + VSCode integration
- Jest + Enzyme for tests, including `@storybook/addon-storyshots` to snapshot test my Storybook and puppeteer for e2e tests.
- Storybook of [my UI components](https://ivanarielcaceres.github.io/bootcamp-gdg-frontend)
- Travis CI to build the production bundles and deploy it to Heroku, run the tests, creating and publishing [the test coverage report](https://coveralls.io/github/ivanarielcaceres/bootcamp-gdg-frontend) and the [UI documentation as a Storybook](https://ivanarielcaceres.github.io/bootcamp-gdg-frontend) on Github Pages.

## Usage

- Setup your repository based on this boilerplate repository following the instructions provided on the next sections.

### Start the server

```
npm start
```

### Debug the tests

Open Visual Studio and debug. Run the tests by default.

If you want to run the integration tests too, type from the terminal:

```
npm test -- --coverage --no-cache
```

### Run the Storybook

```
npm run storybook
```

Then open http://localhost:9009/
