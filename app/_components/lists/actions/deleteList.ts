export default async function deleteList(listId: string): Promise<null> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/lists/${listId}`,
        {
            method: "DELETE",
        })
        .then((response) => {
            if (response.ok) {
                return Promise.resolve(null)
            }

            return Promise.reject(null)
        })
}