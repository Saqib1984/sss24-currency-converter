#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    Pound: 0.79,
    Yuan: 7.23,
    UAED: 3.67,
    Euro: 0.92,
    INR: 83.29,
    Ringgit: 4.75,
    PKR: 277.86,
    KSARiyal: 3.75,
    Lira: 32.02,
};
console.log(chalk.yellow.bold("\t WELCOME TO SSS MONEY EXCHANGE \t"));
let condition = true;
while (condition) {
    let user_answer = await inquirer.prompt([{
            name: "from",
            message: chalk.green.bold("Enter currency name you want to change"),
            type: "list",
            choices: ["USD", "Pound", "Yuan", "UAED", "Euro", "INR", "Ringgit", "PKR", "Riyal", "Lira"]
        },
        {
            name: "to",
            message: chalk.yellow.bold("Enter currency name you want to get."),
            type: "list",
            choices: ["USD", "Pound", "Yuan", "UAED", "Euro", "INR", "Ringgit", "PKR", "Riyal", "Lira"]
        },
        {
            name: "amount",
            message: chalk.white.bold("Please Enter Amount"),
            types: "number"
        }
    ]);
    let currency_from = currency[user_answer.from];
    let currency_to = currency[user_answer.to];
    let amount = user_answer.amount;
    let base_amount = amount / currency_from;
    let converted_amount = Math.round(base_amount * currency_to);
    console.log(chalk.magenta.bold(`Your Converted Amount From ${user_answer.from} To ${user_answer.to} Is ${converted_amount}.${user_answer.to}`));
    console.log(chalk.blue.bold("\t THANKS YOU FOR USING SSS MONEY EXCHANGE\t"));
    let user_answer2 = await inquirer.prompt({
        name: "exit",
        type: "confirm",
        message: chalk.bgRed(`If You Want To Perform Another Transaction, Please Enter "Yes", For Exit Enter "No"`),
        default: false
    });
    condition = user_answer2.exit;
}
