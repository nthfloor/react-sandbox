# Kusasa-Khaya

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Tech Stack

* ReactJS
* NodeJS

## Available Script Commands

* `yarn start`: Start development server with live reloading.
* `yarn build`: Bundle and minify JavaScript files into production ready package.
* `yarn test`: Execute unit tests.
* `yarn lint`: Run code linter (uses eslint and prettier). Use `yarn lint --fix` to automatically fix linting errors where possible.

## Comments on the not so obvious

You may have noticed the small little `.env` file in the folder structure of the application and are wondering why it is there. The reason is simple, React has set up the Webpack config to look for `.env` files and read the `NODE_PATH` environment variable for absolute imports.

So now instead of using `import App from '../../../App'` we can use `import App from '/App'` (assuming the App component is in the root of the `src/` folder).

Refer to this article for more [info](https://medium.com/@ktruong008/absolute-imports-with-create-react-app-4338fbca7e3d).
