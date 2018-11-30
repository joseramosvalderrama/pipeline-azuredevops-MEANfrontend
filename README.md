# HelloWorldAngular

## Project description

The goal of this project is to generate a basic application in Angular to explain the stages of a pipeline in Azure Devops using Docker containers. The application only contains a view with a form to save data in our Microsoft Azure database. The application is ready to be tested, be built and deployed in an Azure Devops pipeline.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Project configuration

Change the url in the file `src/app/services/persona.service.ts` with the url of your API. Remember that the url should finish with `/api/`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build Docker Image

Run `docker build -t helloworld-angular .` for build the Docker Image.

## Run Docker Image 

Run `docker run -d -p 8000:8000 helloworld-angular`. Navigate to `http://localhost:8000` to see the app running.

## Test the app

Run `npm test` to run the test of the app. By default the test are configurated to be executed in Chrome Headless, you can change that in the file `src/karma.conf.js`.
