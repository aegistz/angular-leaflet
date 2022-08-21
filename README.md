# Quick Start Guide

   Angular is a development platform, built on TypeScript. As a platform, Angular includes:
  A component-based framework for building scalable web applications
  A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more
  A suite of developer tools to help you develop, build, test, and update your code
With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators.

## Step 1 — Setting Up the Project

You can use [@angular/cli](https://angular.io/cli) to create a new Angular Project. In your terminal window, use the following command:

`$ npm i @angular/cli`

Creates a new Angular workspace.

`$ ng new angular-leaflet`

Navigate to the newly created project directory:

`$ cd angular-leaflet`

Builds and serves your application, rebuilding on file changes. (--open is opens the url in default browser.)

`$ ng serve --open`

## Step 2 — Creating the Map Component

Install leaflet packag

`$ npm i @types/leaflet --save-dev`
Now, Create the custom map component

`$ ng generate component map`
This command will produce four new files: map.component.css , map.component.html , and map.component.ts . It will also update the app.module.ts file to use this new component.

```typescript
import { MapComponent } from './map/map.component';

@NgModule( {
declarations: [
...
MapComponent
...
] } )
```









Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
