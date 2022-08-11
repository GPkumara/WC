// user defined
import { fact }  from "./fact.js"
import { odd } from "./fact.js"
// built in module
import fs  from 'fs'
// third party modules
import chalk from 'chalk'

fs.writeFile('myfile.txt', 'Hi my first project using file system', function (err) {
  if (err) throw err;
  console.log('File craeted and message stored');
});

console.log(chalk.bgBlue(fact(5)));
console.log(chalk.green(odd(15)));
