# Test Framework for LANEXO

Framework for testing LANEXO with [Playwright](https://playwright.dev/).

## Prerequisites

You need node.js v14 or later and corresponding npm installed. To clone the repository, you need a git client that is set up with credentials to access the repository and access to the intranet/VPN.

To clone the project to a local directory, run:

```
https://dfwpgitlab.sial.com/connected-lab/lanexo/testing/test-framework.git
```

To install all required dependencies, in the project directory, run:

```
npm install
```

## Run tests

In the project directory, run:

```
npx playwright test
```

To watch the test report, run:

```
npx playwright show-report
```

## Development

To make the formatting more consistent, run:

```
npm run format:fix
```

For formatting individual files, run `npx prettier --write path/to/file`.

To lint the code, run:

```
npm run lint
```

For linting individual files, run `npx eslint path/to/file`. To try and automatically fix linting issues, run `npx eslint --fix path/to/file` for individual files or `npm run lint:fix` for all files.

# TODOs

Improvements:

1. Comments need to be included
2. Assertions on each step
3. Link with Epic

Future steps:

1. Include API test cases
2. Increase the use of Browser context
3. Parallel Execution
4. CI/CD integration
