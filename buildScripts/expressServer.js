import express from "express";
import path from "path";
import open from "open";
import os from "os";
import webpack from "webpack";
import config from "../webpack.config.dev";
/* eslint-disable no-console */

console.log(os.hostname()); //eslint-disable-line no-console

const port = 30001;

const app = express();
const webpackMiddleware = getWebpackMiddleware();

app.use(webpackMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/file', function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
})

app.get("/users", (req, res) => {
   res.json([
      { id: 1, name: "Danijel", email: "danijel@mail.com" },
      { id: 2, name: "Marko", email: "marko@mail.com" },
      { id: 3, name: "Darko", email: "darko@mail.com" }
   ]);
});

app.listen(port, function(err){
   console.log("Start listening");
   if(err){
      console.log(err);
   }
   else {
      open("http://localhost:"+port);
   }
});

function getWebpackMiddleware() {
   const compiler = webpack(config);
   const webpackMiddlewareCreate = require("webpack-dev-middleware");
   const middlewareOptions = {
      noInfo: true,
      publicPath: config.output.publicPath
   };
   return webpackMiddlewareCreate(compiler, middlewareOptions);
}
