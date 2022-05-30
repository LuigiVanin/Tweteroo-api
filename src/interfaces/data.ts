interface UserData {
    avatar: string;
    username: string;
}

interface TweetData {
    tweet: string;
    username: string;
}

interface DataArray {
    users: UserData[];
    tweets: TweetData[];
}

export { UserData, TweetData, DataArray };
