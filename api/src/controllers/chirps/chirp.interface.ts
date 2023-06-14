export interface BaseChirp {
    author: string;
    content: string;
    likes: number;
    created: Date;
}

export interface Chirp extends BaseChirp {
    id: number;
}