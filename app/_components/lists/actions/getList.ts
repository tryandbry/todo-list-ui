import { List } from "@/app/_shared/types"

export default async function getList(listId: string | null): Promise<List | null> {
    if (!listId) {
        throw new Error("Invalid list ID")
    }

    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`, {cache: "no-store"})
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(response.json())
            }

            return Promise.reject(null)
        })
}
