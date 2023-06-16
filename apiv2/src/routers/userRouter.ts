import { Router } from "express";
import { userRepository } from "@controllers/users/user.interface";

export const router = Router();

router.put('/', async(req, res) => {
    const person = await userRepository.createAndSave(req.body);
    res.send(person);
})