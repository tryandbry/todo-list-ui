import { randomUUID } from "crypto";
import {
    List,
} from './definitions';

export async function fetchList(): Promise<List[]> {
    try {
        const lists: List[] = await fetch(`${process.env.API_HOST}/lists`)
          .then((response) => response.json())

        const items: Item[] = await fetch(`${process.env.API_HOST}/items`)
          .then((response) => response.json())
        
        console.log("items: ", items)

          return lists
    } catch (error) {
        console.error("fetchList error: ", error)
        throw new Error('Failed to fetch list')
    }
}