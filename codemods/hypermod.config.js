module.exports = {
  maintainers: [],
  targets: [],
  description: "Example codemods for hypermod-community",
  transforms: {
    "10.0.0": require("./10.0.0/transform"),
  },
  presets: {
    "reverse-identifiers": require("./reverse-identifiers/transform"),
  },
};
