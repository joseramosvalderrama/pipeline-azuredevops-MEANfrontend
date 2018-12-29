# HelloWorldAngular

This application will be used in the course "Software Evolution and Maintenance" of Software Engieering Degre of Technical University of Madrid (Universidad Politécnica de Madrid, ETSI Sistemas Informáticos).

## Project description

This is the code of a basic Angular application deployed into Docker containers whose build and release pipelines have to be automated   with Azure Devops. This Angular application makes GET & POST requests to an API to get a list of data and save data in an Azure Cosmos DB. The application is ready to be built, tested and deployed in an Azure DevOps pipeline.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Project configuration

Configure the files 
/src/environments/environment.ts
/src/environments/environment.prod.ts

Look the samples in the folder. Change the url of the file environment.prod.ts with the url of your API. 

## Development server

Run `ng serve` of `ng serve --prod` for a dev server. The first one reads the file environment.ts. The second one reads the file environment.prod.ts

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. More information https://angular.io/guide/deployment

## Build Docker Image

Run `docker build -t helloworld-angular .` for build the Docker Image.

## Run Docker Image 

Run `docker run -d -p 8000:8000 helloworld-angular`. Navigate to `http://localhost:8000` to see the app running.

## Test the app

Run `npm test` to run the test of the app. By default the test are configurated to be executed in Chrome Headless, you can change that in the file `src/karma.conf.js`.
