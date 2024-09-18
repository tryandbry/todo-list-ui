'use client'

import Item from "./Item"
import { useItems } from "./hooks/useItems"
import { useItemsContext } from "./ItemsContext"
import { Item as ItemType } from "@/app/_shared/types"

export default function Items() {
    // const items: ItemType[] = useItems();
    const { items } = useItemsContext()

    return (
        <div className="rounded-b-xl flex flex-col self-center bg-white shadow-xl pb-4 px-4 mx-4 w-[300px] md:w-[480px] overflow-auto" >
            <div className="flex flex-col gap-2">
                {items && items.map((itemData) => (
                    <Item key={itemData.itemId} itemData={itemData} />
                ))}
            </div>
        </div>
    )
}