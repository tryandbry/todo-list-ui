import { List } from "@/app/_shared/types"

export default async function getList(listId: string): Promise<List> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`, {cache: "no-store"})
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(response.json())
            }

            return Promise.reject(response.json())
        })
}
