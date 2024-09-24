import { Item } from "@/app/_shared/types"

export default async function createItem(
    listId: string,
    { name }: Item
): Promise<Item> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}/items`,
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
            cache: "no-store",
        })
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(response.json())
            }

            return Promise.reject(response.json())
        })
}