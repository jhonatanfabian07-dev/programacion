import { ObjectId } from "mongodb";

export interface Series {
    _id?: ObjectId;
    name: string;
    genre: string;
    seasons: number;
    rating: number;
}