export default async function updateList(listId: string): Promise<string> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`,
        {
            method: "DELETE",
        })
        .then((response) => response.json())
}