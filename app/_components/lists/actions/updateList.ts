import { List } from "@/app/_shared/types"

export default async function updateList({ listId, name }: List): Promise<List> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`,
        {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
            cache: "no-store",
        })
        .then((response) => response.json())
}