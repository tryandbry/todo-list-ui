export type List = {
    listId: string;
    name: string;
    createdAt: number;
    updatedAt: number;
};

export type Item = {
    itemId: string;
    name: string;
    completed: boolean;
    list: List;
    createdAt: number;
    updatedAt: number;
};