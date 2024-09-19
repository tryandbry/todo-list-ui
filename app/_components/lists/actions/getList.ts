import { List } from "@/app/_shared/types"

export default async function getList(): Promise<List> {
    // hard code is single list for now
    let listId = '1a471262-5523-4410-ae6c-960bfe0772f6';
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`, {cache: "no-store"})
        .then((response) => response.json())
}
