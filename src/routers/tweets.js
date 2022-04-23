import { Router } from "express";
import data from "../data.js";
import { printRequest, MESSAGE } from "../utils.js";

const tweets = Router();

tweets.post("/", (req, res) => {
    const username = req.headers["user"];
    if (!(req.body && username)) return res.status(400).send(MESSAGE);
    const { tweet } = req.body;

    if (!(username && tweet)) {
        return res.status(400).send(MESSAGE);
    }

    data.tweets.push({ username, tweet });

    printRequest("/tweets[post]", { message: "Ok" });
    res.status(201).send({ message: "OK" });
});

tweets.get("/", (req, res) => {
    const limit = req.query.page;
    if (!limit || limit < 1) {
        return res.status(400).send("Informe uma página válida!");
    }
    let tweetsArray = [...data.tweets]
        .reverse()
        .slice(10 * (limit - 1), limit * 10);

    tweetsArray = tweetsArray.map((i) => {
        let user = data.users.find((j) => (j.username === i.username ? 1 : 0));
        return { ...i, avatar: user.avatar };
    });
    printRequest("tweets[get]", tweetsArray);
    res.status(200).send(tweetsArray);
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
    printRequest("tweets/" + username, tweetsUser);
    res.status(200).send(tweetsUser);
});

export { tweets };
