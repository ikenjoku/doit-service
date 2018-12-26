### Do-It Server


A simple CRUD application for managing todo items.

# Description

**doit-service** is the backend application for a React Native client application to manage checklist/todo items. This application also has user authentication and basic validations.

![screenit](https://user-images.githubusercontent.com/32720508/50410108-2aecf680-07f7-11e9-983a-9317bff03e93.png)

# Table of Contents

- [Documentation](#documentation)
- [Setup](#setup)
- [Testing](#testing)
- [Contribute](#contribute)
- [Deployment](#deployment)
- [License](#license)

## Documentation

TODO - when endpoints are ready

## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [MongoDB](https://www.mongodb.com/) - MongoDB is a document database.
- [Mongoose](https://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model application data

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Install and setup [MongoDB](https://www.mongodb.com/)
- Clone the repository by running the command
  ```
  git clone https://github.com/ikenjoku/doit-service.git
  ```
- Run `cd doit-service` to enter the application's directory
- Install the application's dependencies by running the command
  ```
  yarn install
  ```
- Create a `.env` file in the root of your directory using the `.env.example` file in the repository
- Setup the database
- Start the application by running
  ```
  yarn run start:dev
  ```
  The application should now be running at `http://127.0.0.1:5000`


### More about environmental variables

After setting up your `.env` from the template provided in the `.env.example` file,
to use these variables anywhere in the app;

- import the `dotenv` package

```
import dotenv from 'dotenv'
```

- Make it available for use as early as possible in that file

```
dotenv.config()
```

- Access any variable in the `.env`

```
process.env.MY_ENV_VARIABLE
```


## Testing
TODO - as project evolves

[Jest](https://jestjs.io) will be used as the testing framework for both the unit tests and integration tests.
To execute all tests, run the command

```
  yarn test or make test
```

## Contribute

Contributions to the project are welcome! Before contributing, look through the branch naming, commit message and pull request conventions in the project. When you are all done, follow the guidelines below to raise a pull request:

- Clone the repository and checkout from `develop` to a new branch to start working on the assigned task. Ensure branch names follow the convention in the project.
- Work on the task following the coding standards and [style guide](https://github.com/airbnb/javascript) used in the project.
- When task has been completed, make commits and raise a pull request against `develop` branch, also ensure to follow the conventions.

If the pull request is accepted by the owners of the repository, then it is merged into the `develop` branch and closed.

## Deployment

TODO - add deployment commands

## License

This application is licensed under the terms of the [MIT License](https://github.com/ikenjoku/doit-service/blob/develop/LICENSE)
