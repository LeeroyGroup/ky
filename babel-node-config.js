module.exports = {
  presets: [
    ['@babel/preset-env', { "loose": true }],
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ["@babel/plugin-transform-spread", { "loose": true }],
    ["@babel/plugin-proposal-object-rest-spread", { "loose": true }],
    ["@babel/plugin-transform-destructuring", { "loose": true }]
  ]
};
