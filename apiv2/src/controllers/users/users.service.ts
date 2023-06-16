// Data-Model Interfaces //===>
import { BaseUser, User } from "./user.interface";
import { Users } from "./users.interface";
import db from "../../modules/db";

// Methods //===>
export const getAll = async (): Promise<User[]> => {
    const users: User[] = await db.select<User>('users');
    return users;
};

export const get = async (): Promise<User> => {
    return;
};

export const create = async (newUser: BaseUser): Promise<User> => {
    const id = new Date().valueOf();
    return;
};