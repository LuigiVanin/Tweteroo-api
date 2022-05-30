import { Router, Request, Response } from "express";
import data from "../data";
import { printRequest, MESSAGE } from "../utils";

const tweets = Router();

tweets.post("/", (req: Request, res: Response) => {
    const username = req.headers["user"] as string;
    if (!req.body || !username) {
        return res.status(400).send(MESSAGE);
    }
    const { tweet } = req.body;

    if (!tweet) {
        return res.status(400).send(MESSAGE);
    }

    data.tweets.push({ username, tweet });

    printRequest("/tweets[post]", { message: "Ok" });
    res.status(201).send({ message: "OK" });
});

tweets.get("/", (req: Request, res: Response) => {
    const limit = Number(req.query.page);
    if (!limit || limit < 1) {
        return res.status(400).send("Informe uma página válida!");
    }
    let tweetsArray = [...data.tweets]
        .reverse()
        .slice(10 * (limit - 1), limit * 10);

    tweetsArray = tweetsArray.map((i) => {
        let user = data.users.find((j) => (j.username === i.username ? 1 : 0));
        return { ...i, avatar: !user ? "no-photo" : user.avatar };
    });
    printRequest("tweets[get]", tweetsArray);
    res.status(200).send(tweetsArray);
});

tweets.get("/:username", (req: Request, res: Response) => {
    const tweetsUser = [];
    const { username } = req.params;
    const avatar = data.users.find((user) => {
        return user.username === username;
    });
    if (!avatar) {
        return res.status(401).send("usuário ainda não criado");
    }
    for (const tweet of data.tweets) {
        if (tweet.username === username) {
            tweetsUser.push({ ...tweet, avatar: avatar.avatar });
        }
    }
    printRequest("tweets/" + username, tweetsUser);
    res.status(200).send(tweetsUser);
});

export { tweets };
