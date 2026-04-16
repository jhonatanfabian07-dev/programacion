import { ObjectId } from 'mongodb';

export interface Movie {
    _id?: ObjectId;
    name: string;
    genre: string;
    rating: number;
}