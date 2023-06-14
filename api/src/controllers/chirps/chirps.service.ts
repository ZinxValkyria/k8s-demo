// Data-Model Interfaces //===>
import { BaseChirp, Chirp } from "./chirp.interface";
import { Chirps } from "./chirps.interface";


// Methods //===>
export const findAll = async (): Promise<Chirp[]> => {
    // Querying Database Code goes here
    return;
};

export const find = async(id: number): Promise<Chirp> => {
    // Querying Database Code goes here
    return;
};