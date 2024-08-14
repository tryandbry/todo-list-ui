import { UUID } from "crypto";

export type List = {
    uuid: string;
    name: string;
    createdAt: number;
    updatedAt: number;
};

export type Item = {
    uuid: string;
    name: string;
    completed: boolean;
    createdAt: number;
    updatedAt: number;
};