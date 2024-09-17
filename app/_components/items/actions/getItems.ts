import { Item } from "@/app/_shared/types"

export default async function getItems(listId: string | undefined): Promise<Item[]> {
    if (!listId) {
        const fallback: Item[] = []
        return Promise.resolve(fallback)
    }

    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}/items`, {cache: "no-store"})
        .then((response) => response.json())
}