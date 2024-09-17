import classNames from "classnames"
import { useState } from "react"
import type { Item as ItemType } from "@/app/_shared/types"
import { useStateWithDelayedFetch } from "@/app/_shared/useStateWithDelayedFetch"
import { useUpdateItem } from "./hooks/useUpdateItem"

interface ItemProps {
    itemData: ItemType;
}
export default function Item({ itemData }: ItemProps) {
    const TIMEOUT_DURATION = 2000
    const updateItem = useUpdateItem()
    let itemClasses = classNames(
        "flex items-center border-y-2 border-r-2 rounded-r-md p-2",
        { "bg-white": !itemData.completed, "bg-slate-100": itemData.completed },
        { "text-black": !itemData.completed, "text-slate-400": itemData.completed },
        { "border-slate-100": !itemData.completed, "border-slate-200": itemData.completed },
    )
    let textInputClasses = classNames(
        "outline-none grow",
        { "bg-white": !itemData.completed, "bg-slate-100": itemData.completed },
    )

    const {
        data: itemState,
        setData: setItemState,
    } = useStateWithDelayedFetch(updateItem, itemData, TIMEOUT_DURATION)

    return (
        <div className="bg-pink-500 rounded-md pl-1">
            <div className={itemClasses}>
                <input type="text" name="" id="" value={itemState.name} className={textInputClasses}
                    onChange={(e) => setItemState({
                        ...itemState,
                        name: e.target.value,
                    }, false)}
                ></input>
                <input type="checkbox" name="" id=""
                    className="ml-4 mr-2 h-6 w-6"
                    checked={itemState.completed}
                    onChange={(e) => setItemState({
                        ...itemState,
                        completed: !itemState.completed,
                    }, true)}
                ></input>
            </div>
        </div>
    )
}