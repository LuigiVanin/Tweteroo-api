import express from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";
import { user } from "./routers/user.js";
import data from "./data.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use("/", user);

app.get("/", (req, res) => {
    res.send({ message: data });
});

app.listen(PORT, () => {
    console.log(chalk.bold.green(`\n---\nAPLICAÇÂO ABERTA NA PORTA ${PORT}🚀`));
});
