'use client'

import { useState, ChangeEvent, KeyboardEvent } from "react"

import { useCreateItem } from "./hooks/useCreateItem"
import { Item } from "@/app/_shared/types"

export default function AddItem() {
    const [inputText, setInputText] = useState('')
    const { mutate: createItem } = useCreateItem()
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }
    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") {
            return
        }

        const item: Item = { name: inputText }
        createItem(item)
        setInputText('')
    }
    return (
        <div className="flex flex-col mb-2">
            <div className="bg-cyan-500 rounded-md pl-1">
                <div className="flex items-center bg-white border-y-2 border-r-2 border-slate-100 text-black text-sm rounded-r-md py-1 px-2">
                    <input type="text" name="" id="" placeholder="Enter new todo item"
                        value={inputText}
                        onChange={handleOnChange}
                        onKeyDown={handleOnKeyDown}
                        className="outline-none grow"
                    ></input>
                </div>
            </div>
        </div>
    )
}