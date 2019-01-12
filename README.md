# Pipeline-MEANfrontend-azuredevops

Repositorio para el laboratorio de CI/CD con Azure DevOps

This respository is a mirror of [HelloworldAngular](https://github.com/jdiazfernandez/helloworld-angular.git).

# HelloWorldAngular

This application will be used in the course "Software Evolution and Maintenance" of Software Engieering Degre of Technical University of Madrid (Universidad Politécnica de Madrid, ETSI Sistemas Informáticos).

## Project description

This is the code of a basic Angular application deployed into Docker containers whose build and release pipelines have to be automated   with Azure Devops. This Angular application makes GET & POST requests to an API ([API NODE](https://github.com/jdiazfernandez/api-node.git)) to get a list of data and save data in an Azure Cosmos DB. The application is ready to be built, tested and deployed in an Azure DevOps pipeline.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Getting Started

### Download

    > git clone https://github.com/jdiazfernandez/helloworld-angular

### Project configuration

Create the files 

`/src/environments/environment.ts`

`/src/environments/environment.prod.ts`

Look the samples in the folder. Change the url of the file environment.prod.ts with the url of your API. 

### Install dependencies

    > npm install

### Development server

    > ng serve
    > ng serve --prod      

The first one reads the file environment.ts. The second one reads the file environment.prod.ts

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. More information https://angular.io/guide/deployment

### Test the app

    > npm test
    
 The test command generate a junit report with the test results. You can found it in the folder results.
 By default the test are configurated to be executed in Chrome Headless, you can change that in the file `src/karma.conf.js`.

### Build Docker Image

Run `docker build -t helloworld-angular .` for building the Docker Image.

### Run Docker Image 

Run `docker run -d -p 8000:8000 helloworld-angular`. Navigate to `http://localhost:8000` to see the app running.


