import { Item } from "./lib/definitions"
import ItemRow from "./item-row"

export default function ItemCollection({ items }: { items: Item[] }) {
    console.log("items: ", items)
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.itemId}><ItemRow item={item} /></li>
                ))}
            </ul>
        </div>
    )
}