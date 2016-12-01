/*eslint-disable no-console*/

import jfs from "json-schema-faker";
import {schema} from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const data = jfs(schema);
const json = JSON.stringify(data);

fs.writeFile("./src/api/db.json", json, (err) => {
   if(err){
      console.log(chalk.red(err));
   }
   else {
      console.log(chalk.green("Mock data generated"));
   }
});
