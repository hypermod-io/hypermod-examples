module.exports = {
  maintainers: [],
  targets: [],
  description: "Codemods for codeshift-community",
  transforms: {
    "10.0.0": require("./10.0.0/transform"),
  },
  presets: {},
};
