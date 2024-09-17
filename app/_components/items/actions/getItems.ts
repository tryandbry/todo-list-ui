import { Item } from "@/app/_shared/types"

export default async function getItems(listId: string): Promise<Item[]> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}/items`, {cache: "no-store"})
        .then((response) => response.json())
}