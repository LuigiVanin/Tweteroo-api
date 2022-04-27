import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        chalk.bold.greenBright(`\n---\nAPLICAÇÂO ABERTA NA PORTA ${PORT}🚀`)
    );
});
