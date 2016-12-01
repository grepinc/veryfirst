const registerBabel = require("babel-register");

registerBabel();

require.extensions[".css"] = function(){}
