export interface BaseUser {
    displayName: String;
    joined: Date;
    avatar: URL;
    username: String;
}

export interface User extends BaseUser {
    id: number;
}