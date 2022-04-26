import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

console.log(process.env.PORT);
console.log(chalk.green.bold("Its me, typescript!"));
