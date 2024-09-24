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
    let divClasses = classNames(
        "rounded-md pl-1 grow shrink",
        { "bg-pink-500": !itemData.completed, "bg-slate-400": itemData.completed },
    )
    let itemClasses = classNames(
        "flex items-center border-y-2 border-r-2 rounded-r-md p-2",
        { "bg-white": !itemData.completed, "bg-slate-100": itemData.completed },
        { "text-black": !itemData.completed, "text-slate-400": itemData.completed },
        { "border-slate-100": !itemData.completed, "border-slate-200": itemData.completed },
    )
    let textInputClasses = classNames(
        "outline-none grow shrink w-10",
        { "bg-white": !itemData.completed, "bg-slate-100": itemData.completed },
    )

    const {
        data: itemState,
        setData: setItemState,
    } = useStateWithDelayedFetch(updateItem, itemData, TIMEOUT_DURATION)

    return (
        <div className="flex flex-row items-center gap-2">
            <div className={divClasses}>
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
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-slate-100 hover:fill-red-500 hover:stroke-white"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            </div>
        </div>
    )
}