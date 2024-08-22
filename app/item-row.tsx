import { Item } from "./lib/definitions"

export default function ItemRow({ item }: { item: Item }) {
    return (
        <div>
            <p>Item Name: {item.name}</p>
            <p>Item ID: {item.itemId}</p>
            <p>Item Completed: {item.completed.toString()}</p>
            <p>Item created at: {new Date(item.createdAt).toString()}</p>
            <p>Item updated at: {new Date(item.updatedAt).toString()}</p>
        </div>
    )
}