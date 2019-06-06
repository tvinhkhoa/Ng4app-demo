# Demo Angular 4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Get angular older version
ex: Angular 4

mkdir ng4-cli && cd ng4-cli && npm init

npm i @angular/cli@1.6.3

If error not found module @angular-devkit/core
npm i -D @angular-devkit/core

cd ..

./ng4-cli/node_modules/.bin/ng new ng4app

## Add package bootstrap
npm install ngx-bootstrap --save 
npm install bootstrap --save

In angular-cli.json
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
]

## Create component
ng g component [component name]

## Create service
ng g service [service name]