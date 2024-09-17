import classNames from "classnames"
import type { Item as ItemType } from "@/app/_shared/types"
import { useUpdateItem } from "./hooks/useUpdateItem"

interface ItemProps {
    itemData: ItemType;
}
export default function Item({ itemData }: ItemProps) {
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

    return (
        <div className="bg-pink-500 rounded-md pl-1">
            <div className={itemClasses}>
                <input type="text" name="" id="" value={itemData.name} className={textInputClasses}></input>
                <input type="checkbox" name="" id=""
                    className="ml-4 mr-2 h-6 w-6"
                    checked={itemData.completed}
                    onChange={() => updateItem({
                        ...itemData,
                        completed: !itemData.completed,
                    })}
                ></input>
            </div>
        </div>
    )
}