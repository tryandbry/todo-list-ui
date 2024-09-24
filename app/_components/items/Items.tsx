'use client'

import Item from "./Item"
import { useItemsContext } from "./ItemsContext"

export default function Items() {
    const { items } = useItemsContext()

    return (
        <div className="flex flex-col gap-2">
            {items.map((itemData) => (
                <Item key={itemData.itemId} itemData={itemData} />
            ))}
        </div>
    )
}