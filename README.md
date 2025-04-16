# WisePelican

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.


## Overview
A simple application that connects to an Airtable datasource. 
 - I chose Airtable because it was a small application that was easy to see data flowing back and forth. Also because I had never used it and wanted to try a new tool.
 - For the setup - I will send you the PAT and tableName in order to update in the environment.config files. This is necessary so it is not public.  
 - The project has an interceptor that at a later date should be updated to use an oAuth configuration and instead of the PAT. 
 - Error handling has been included to alert the users when an error occurs. 
 - There is no Retool admin panel. I decided to create the admin panel inside the Angular UI. 
 - There is a search filter that allows you to search by name. If you get no results, simply click 'Clear' and all the users will return. 



## Development server
 Install app dependencies:
```bash
npm install
```

Update the environment files with the required variable. 

To start a local development server, run:


```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
