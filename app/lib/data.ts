import { List, Item } from './definitions';

export async function fetchList(listId: string): Promise<List> {
    try {
        const list: List = await fetch(`${process.env.API_HOST}/lists/${listId}`, {cache: "no-store"})
          .then((response) => response.json())

          return list
    } catch (error) {
        console.error("fetchList error: ", error)
        throw new Error('Failed to fetch list')
    }
}

export async function fetchItems(listId: string): Promise<Item[]> {
    try {
        const items: Item[] = await fetch(`${process.env.API_HOST}/lists/${listId}/items`, {cache: "no-store"})
          .then((response) => response.json())

          return items
    } catch (error) {
        console.error("fetchItems error: ", error)
        throw new Error('Failed to fetch items')
    }
}