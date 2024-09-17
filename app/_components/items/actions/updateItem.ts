import { Item } from "@/app/_shared/types"

export default async function updateItem({ itemId, name, completed }: Item): Promise<Item> {
    console.log("updateItem: ", itemId, name, completed)
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/${itemId}`,
        {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, completed }),
            cache: "no-store",
        })
        .then((response) => response.json())
}