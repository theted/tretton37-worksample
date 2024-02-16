# Tretton37 colleagues

List of colleagues at Tretton37.

## Features:

- **Filter by name and office** -
  independently filter employees by name and/or office.

- **Responsive** -
  works on all screen sizes.

- **Modern CSS** -
  nothing really fancy / grid, flexbox, variables, support for dark-mode.

- **E2E-testing** -
  ensures that the project works against the API.

- **Unit tests** -
  ensuring that components are working as expected.

- **CI/CD pipeline for testing** -
  automated testing on push to master and pull requests. I feel this is very important for any project in order to ensure that everything continously works as expected - very good for developer's peace of mind!

- **Typescript** -
  ensuring correct types (and autocomplete!)

## Code structure

The main thought is code **understandability** - handover to the next developer should cause as little friction as possible.

A few principles are adhered to:

#### Separation of concerns

Each component should do one thing only (when possible).

#### Understandability

Taking over this project should cause as little friction as possible for the next developer. This is also the reason for choosing the packages used in this project.

## Packages

This project is using the following packages:

- [Vite]
  modern, blazingly fast frontend tooling. Very easy to set up a new project, and to build for production.

- [React]
  frontend library. React is the most popular javascript framework, hence most developers understand it. This project could easily have been implemented using vanilla javascript / web components, but I feel that more frontent developers understands React these days ("sadly!")

- [Vitest]
  vite-native testing framework, used for unit-tests.

- [Playwright]
  popular E2E-testing library.

## Installation

#### Defining API key

The API key is defined in the `.env` file (not included in this repo). Place your API-key in the file, like so

```
VITE_API_KEY=your API key here
```

An example is provided in [.env.example](.env.example).

#### Running the project locally

```
npm install
npm run dev
```

or, build the project and serve static files

```
npm install
npm run build
npm run preview
```

Alternatively, build and run with Docker:

```
docker build -t tretton37-colleagues .
docker run -d -p 8080:80 tretton37-colleagues
```

[vite]: https://vitejs.dev/
[react]: https://react.dev/
[vitest]: https://vitest.dev/
[playwright]: https://playwright.dev/
