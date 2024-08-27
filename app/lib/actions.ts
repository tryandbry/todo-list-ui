import { Item } from './definitions';

'use server'
export async function updateItem({ itemId, name, completed }: Item): Promise<Item> {
  console.log("updateItem", itemId, name, completed)
  if (!itemId) {
      const err = new Error('Invalid item ID')
      console.error(`updatedItem error: ${err}`)
      throw new Error('Failed to update item')
  }

  const updatedItem: Item = await fetch(`${process.env.API_HOST}/items/${itemId}`, {
      method: "PATCH",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, completed })
  })
    .then((response) => response.json())
    .catch ((error) => {
      console.error(`updateItem error: ${error}`)
      throw new Error('Failed to update item')
    })
  
  return updatedItem
}