import express from "express";
import cors from "cors";
import { user } from "./routers/user";
import { tweets } from "./routers/tweets";
import data from "./data";

const app = express();
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);

app.use("/tweets/", tweets);
app.use("/", user);

app.get("/", (req, res) => {
    res.send({ message: data });
});

export default app;
