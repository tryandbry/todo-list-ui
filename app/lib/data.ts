import { randomUUID } from "crypto";
import {
    List,
} from './definitions';

export async function fetchList() {
    try {
        const exampleList = <List>({
            uuid: randomUUID(),
            name: "pizza",
            createdAt:  Date.now(),
            updatedAt: Date.now()
        })
        return [exampleList]
    } catch (error) {
        console.error("fetchList error: ", error)
        throw new Error('Failed to fetch list')
    }
}