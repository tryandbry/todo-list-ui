import { List } from "@/app/_shared/types"

export default async function getList(listId: string): Promise<List> {
    // hard code is single list for now
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`, {cache: "no-store"})
        .then((response) => response.json())
}
