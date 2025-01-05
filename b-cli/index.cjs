"use strict";

var _chalk = _interopRequireDefault(require("chalk"));
var _figlet = _interopRequireDefault(require("figlet"));
var _fs = require("fs");
var _inquirer = _interopRequireDefault(require("inquirer"));
var _nanospinner = require("nanospinner");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
(0, _figlet.default)('bobby.com', async function (err, data) {
  // log
  console.log(data);
  console.log(_chalk.default.green(`welcome to use bobby`));
  const message = await _inquirer.default.prompt({
    name: 'dirname',
    type: 'input',
    message: 'please input your project name',
    default() {
      return 'bobby';
    }
  });
  const dirIsExists = (0, _fs.existsSync)(message.dirname);
  if (dirIsExists) {
    console.log(_chalk.default.redBright(`the project ${message.dirname} is exists`));
  } else {
    const spinner = (0, _nanospinner.createSpinner)('loading...').start();
    setTimeout(() => {
      spinner.success({
        text: 'success!'
      });
    }, 3000);
    console.log(_chalk.default.white('try to use npm'));
  }
});
