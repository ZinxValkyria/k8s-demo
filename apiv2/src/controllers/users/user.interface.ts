export type BaseUser = {
    displayName: String;
    joined: Date;
    avatar: URL;
    username: String;
}

export type User = BaseUser & {id: number};