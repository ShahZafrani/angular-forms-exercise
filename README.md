# My approach

While it was not stated in my instructions to avoid AI code generation tools, I understand that the purpose of this exercise is to get signals from a prospective employee into how they work, and to establish a baseline effectiveness in a given technology. I have chosen not to use any AI tools, and will document my efforts below so as to provide the afforementioned signals. 

- create a new app with angular-cli `ng new cares-exercise`
- remove boilerplate, and switch from the templateurl syntax to providing the template directly into each component. This is done because it's a small project and non of the templates will be large. 
- create a new component for the contact info form with `ng g component`
- Deciding between a reactive form and a template driven form (https://angular.dev/guide/forms#key-differences)
    - reactive-forms seem to be the way. They don't rely on 2-way binding, are more performant, and validators can simply be functions instead of relying on directives
- importing modules for reactive form
- using dependency injection to inject the FormBuilder
- assigning validators for the required fields, and using the angular built-in email validator
- just a little bit of styling because it's what makes us civilized. Display:grid and some padding.



# Instructions for the exercise:
Using Angular:

Create a Person Data Entry Form where the user enters a name, phone number, and email, and upon submission, a message confirms the data was saved. The name and email fields must be required and should have a "valid" property indicating that the required field has text entered. 

Business Scenario:

A company needs a Person Entry Form where employees can:

    Enter a person's details: Name, Phone, and Email.
    Validate the input fields:

        Name and Email are required.
        Email should be in valid format.
        Each field component should expose a valid property that reflects its validation state.

    Submit the form and show a "Data Saved" message only if all fields are valid.


Auto-generated readme below:

---

# CaresExercise

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

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

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
