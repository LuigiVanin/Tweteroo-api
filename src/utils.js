import chalk from "chalk";

const printRequest = (rota, data) => {
    console.log(
        chalk.green("\n[request resolve]") +
            chalk.bold.green(`[localhost:${process.env.PORT || 5000}/${rota}]`)
    );
    console.log(chalk.yellow("-> data retrivied:"));
    console.log(data);
};

const MESSAGE = "Todos os campos são obrigatórios!";

export { printRequest, MESSAGE };
