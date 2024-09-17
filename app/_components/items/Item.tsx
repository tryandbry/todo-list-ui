
import type { Item as ItemType } from "@/app/_shared/types"

interface ItemProps {
    itemData: ItemType;
}
export default function Item({ itemData }: ItemProps) {
    return (
        <div className="bg-pink-500 rounded-md pl-1">
            <div className="flex items-center bg-white border-y-2 border-r-2 border-slate-100 rounded-r-md p-2">
                <input type="text" name="" id="" value={itemData.name}
                    className="outline-none grow text-black"
                ></input>
                <input type="checkbox" name="" id=""
                    className="ml-4 mr-2 h-6 w-6"
                ></input>
            </div>
        </div>
    )
}