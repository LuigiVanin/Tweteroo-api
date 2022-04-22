import { Router } from "express";
import data from "../data.js";

const user = Router();

user.post("/signup", (req, res) => {
    const { username, avatar } = req.body;
    console.log({ username, avatar });
    data.users.push({ username, avatar });
    res.status(201).send({ message: "ok" });
});

export { user };
