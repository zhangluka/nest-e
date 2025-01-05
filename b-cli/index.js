import chalk from "chalk";
import figlet from "figlet";
import { existsSync } from "fs";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

figlet('bobby.com', async function (err, data) {
  // log
  console.log(data);
  console.log(chalk.green(`welcome to use bobby`));

  const message = await inquirer.prompt({
    name: 'dirname',
    type: 'input',
    message: 'please input your project name',
    default() {
      return 'bobby'
    }
  })

  const dirIsExists = existsSync(message.dirname)

  if (dirIsExists) {
    console.log(chalk.redBright(`the project ${message.dirname} is exists`));
  } else {
    const spinner = createSpinner('loading...').start();

    setTimeout(() => {
      spinner.success({ text: 'success!' })
    }, 3000)

    console.log(chalk.white('try to use npm'));
  }
})