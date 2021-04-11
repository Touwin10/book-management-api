## Simple Book Management API

This is a sample CRUD book management API using:

- Mongodb
- NodeJS
- Express
- Swagger
- TypeScript
- TypeORM

## Requirements

For development, you will need Node.js and a node global package, and Mongodb installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

### Mongodb
The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

## Install

    $ git clone https://github.com/YOUR_USERNAME/book-management-api.git
    $ cd book-management-api
    $ npm install
    $ npm start

## Run

##### Running API server locally
     $ npm start

### API documentation - Swagger

Navigate to http://localhost:3100/api-docs/#/ to have look on the endpoint using in the application. 


### Using Docker Container

Run in this directory:
```
docker-compose up
```
The app will be running at [http://localhost:3100](http://localhost:3100)