import { Router } from "express";
import data from "../data.js";
import { printRequest, MESSAGE } from "../utils.js";

const tweets = Router();

tweets.post("/", (req, res) => {
    if (!req.body) return res.status(400).send(MESSAGE);
    const { username, tweet } = req.body;

    if (!(username && tweet)) {
        return res.status(400).send(MESSAGE);
    }

    data.tweets.push({ username, tweet });
    res.status(201).send({ message: "OK" });
});

// FIXME: problema de ordem no array
tweets.get("/", (req, res) => {
    let array = data.tweets.reverse().slice(0, 10);
    printRequest("/tweets[get]", array.slice(0, 10));

    array = array.map((i) => {
        let user = data.users.find((j) => (j.username === i.username ? 1 : 0));
        return { ...i, avatar: user.avatar };
    });
    res.status(200).send(array);
});

tweets.get("/:username", (req, res) => {
    const tweetsUser = [];
    const { username } = req.params;
    const avatar = data.users.find((user) => {
        return user.username === username;
    });
    for (const tweet of data.tweets) {
        if (tweet.username === username) {
            tweetsUser.push({ ...tweet, avatar: avatar.avatar });
        }
    }
    res.status(200).send(tweetsUser);
});

export { tweets };
