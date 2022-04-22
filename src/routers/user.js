import { Router } from "express";
import data from "../data.js";
import { printRequest } from "../utils.js";

const user = Router();

user.post("/signup", (req, res) => {
    const { username, avatar } = req.body;

    data.users.push({ username, avatar });
    printRequest("signup", { username, avatar });
    res.status(201).send({ message: "OK" });
});

export { user };
