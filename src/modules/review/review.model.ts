import { ObjectId } from "mongodb";

export interface Review {
    _id?: ObjectId;
    movie: string;
    comment: string;
}