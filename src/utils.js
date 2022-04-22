import chalk from "chalk";

const printRequest = (rota, data) => {
    console.log(chalk.green("\n[request resolve]"));
    console.log(
        chalk.yellow("-> Mensagem recebida na rota: ") +
            chalk.bold.green.underline(
                `localhost:${process.env.PORT || 5000}/${rota}!`
            )
    );
    console.log(chalk.green("-> body:"));
    console.log(data);
};

export { printRequest };
