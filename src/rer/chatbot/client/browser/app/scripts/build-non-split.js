const rewire = require("rewire");
const defaults = rewire("react-scripts/scripts/build.js");
let config = defaults.__get__("config");

config.optimization.splitChunks = {
  cacheGroups: {
    default: false
  }
};
config.optimization.runtimeChunk = false;

const name = "rer-chatbot";
config.output.filename = `static/js/${name}.js`;
config.output.chunkFilename = `static/js/${name}.chunk.js`;
config.plugins[5].options.filename = `static/css/${name}.css`;
config.plugins[5].options.chunkFilename = `static/css/${name}.chunk.css`;
config.externals = {
  jquery: "jQuery"
};
