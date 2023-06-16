import express, {Request, Response} from "express";
import * as UserService from "./users.service";
import { BaseUser, User } from "./user.interface";
import { Users } from "./users.interface";

export const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users: User[] = await UserService.getAll();
        res.status(200).send([users, "hello"]);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});