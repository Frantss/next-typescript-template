# next-typescript-template

## Installation

```shell
# NPM
npx create-next-app --example https://github.com/Frantss/next-typescript-template

# Yarn
yarn create next-app --example https://github.com/Frantss/next-typescript-template
```

## Includes

- [**Next.Js**](https://nextjs.org/): A React framework for static and servers side rendering
- [**Preact**](https://preactjs.com/guide/v10/getting-started): Small runtime with all the React capabilities, aliased as React, for seamless integration
- [**TypeScript**](https://www.typescriptlang.org/docs/): Why wouldn't you use it?
- [**Jest**](https://jestjs.io/docs/en/getting-started): Don't forget to write tests
  - [**Preact Testing Library**](https://preactjs.com/guide/v10/preact-testing-library): Great library to test all of your components and hooks
- [**Cypress**](https://www.cypress.io/): For end-to-end tests
- [**Redux Toolkit**](https://redux-starter-kit.js.org/): The easy way to do redux
- [**Sass**](https://sass-lang.com/documentation):
  - Autoprefixer
  - Modules
- Linting: For a clean and consistent codebase
  - [**ESLint**](https://eslint.org/)
  - [**Prettier**](https://prettier.io/docs/en/index.html)
  - [**Stylelint**](https://stylelint.io/)
  - [**lint-staged**](https://github.com/okonet/lint-staged)
  - [**Husky**](https://typicode.github.io/husky/#/)

## Commands

- `yarn install`: Installs dependencies

- `yarn dev`: Run a development, HMR server

- `yarn build`: Production-ready build
- `yarn start`: Run a production-like server

- `yarn lint`: Check linting in typescript and scss files
- `yarn lint:fix`: Fix linting issues in typescript and scss files

- `yarn test`: Run tests
- `yarn test:watch`: Run tests in watch mode
- `yarn test:coverage`: Run tests in coverage mode
- `yarn test:e2e`: Run all cypress tests

For detailed explanation on how things work, checkout [Next.Js Docs](https://nextjs.org/docs/getting-started).
