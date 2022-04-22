import { Router } from "express";
import data from "../data.js";
import { printRequest, MESSAGE } from "../utils.js";

const user = Router();

user.post("/sign-up", (req, res) => {
    if (!req.body) return res.status(400).send(MESSAGE);
    const { username, avatar } = req.body;
    if (!(username && avatar)) {
        return res.status(400).send(MESSAGE);
    }

    data.users.push({ username, avatar });
    printRequest("signup", { username, avatar });
    res.status(201).send({ message: "OK" });
});

export { user };
