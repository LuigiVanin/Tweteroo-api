import { Router } from "express";
import data from "../data.js";
import { printRequest } from "../utils.js";

const tweet = Router();

tweet.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;

    data.tweets.push({ username, tweet });
    res.status(201).send({ message: "OK" });
});

tweet.get("/tweets", (req, res) => {
    let array = data.tweets.reverse().slice(0, 10);
    printRequest("/tweets[get]", array.slice(0, 9));

    array = array.map((i) => {
        let user = data.users.find((j) => (j.username === i.username ? 1 : 0));
        return { ...i, avatar: user.avatar };
    });
    res.status(200).send(array);
});

export { tweet };
