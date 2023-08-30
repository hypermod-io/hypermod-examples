<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/hypermod-io/hypermod-examples/assets/3030010/d769eb9f-61ff-4f74-895c-a356f04193aa">
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/hypermod-io/hypermod-examples/assets/3030010/5ac232d0-00e5-4c20-95f4-de7cc95e8f95">
  <img alt="Hypermod – App repository banner" src="https://github.com/hypermod-io/hypermod-examples/assets/3030010/5ac232d0-00e5-4c20-95f4-de7cc95e8f95">
</picture>

# Hypermod Examples

This project was bootstrapped with [Hypermod](https://www.codeshiftcommunity.com/). Please see the [external packages guide](https://www.codeshiftcommunity.com/docs/external-packages) for more information on how to work with this repo.

## Scripts

### `npm run dev`

Runs the Hypermod CLI useful for testing transform files as if they have been published

**example:** `npm run dev -t codemods/10.0.0/transform.ts`

Alternatively, you can run `npm run dev` to see an interactive list of codemods to choose from.

See the [cli reference](https://www.codeshiftcommunity.com/docs/cli) for more information.

### `npm run test`

Launches the test runner in interactive watch mode.

See the [testing guide](https://www.codeshiftcommunity.com/docs/testing) for more information.

### `npm run validate`

Check the validity of your `hypermod.config.js` file.

See the [configuration options](https://www.codeshiftcommunity.com/docs/configuration) for more information.

### `npm run build`

Builds the app for production to the `dist` folder.

## Publishing

This package can be published to npm via the normal commands `npm version` and `npm publish`

## Build tooling

Feel free to replace the preinstalled build tooling & dependencies to suit your needs. The only requirement is that there is a valid `hypermod.config.js` in your project root, `/src` or `/codemods` directories.
