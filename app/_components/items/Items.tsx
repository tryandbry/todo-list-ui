'use client'

import Item from "./Item"
import { Item as ItemType } from "@/app/_shared/types"
import { useItemsContext } from "./ItemsContext"

export default function Items() {
    const { items } = useItemsContext()
    const sortItemsByUpdatedAt = (i: ItemType, j: ItemType) => {
        if (i.updatedAt === undefined) return 1
        if (j.updatedAt === undefined) return -1

        return i.updatedAt > j.updatedAt ? -1 : 1
    }
    const reverseSort = (i: ItemType, j: ItemType) => (
        -1 * sortItemsByUpdatedAt(i, j)
    )

    return (
        <div className="rounded-b-xl flex flex-col self-center bg-white shadow-xl pb-4 px-4 mx-4 w-[300px] md:w-[480px] overflow-auto" >
            <div className="flex flex-col gap-1">
                {/* show incomplete items first */}
                {items
                    .filter((item) => !item.completed)
                    .sort(sortItemsByUpdatedAt)
                    .map((itemData) => (
                        <Item key={itemData.itemId} itemData={itemData} />
                    ))
                }
                {/* show complete items last */}
                {items
                    .filter((item) => item.completed)
                    .sort(reverseSort)
                    .map((itemData) => (
                        <Item key={itemData.itemId} itemData={itemData} />
                    ))
                }
            </div>
        </div>
    )
}