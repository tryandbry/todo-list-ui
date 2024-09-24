export default async function deleteItem(itemId: string): Promise<null> {
    return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/${itemId}`,
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