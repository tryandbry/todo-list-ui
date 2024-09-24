'use client'

import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react"
import classNames from "classnames"

import { useCreateItem } from "./hooks/useCreateItem"
import { Item } from "@/app/_shared/types"

export default function AddItem() {
    const [inputText, setInputText] = useState('')
    const [showError, setShowError] = useState(false)
    const { mutate: createItem, reset, isPending, isError, isSuccess } = useCreateItem()
    const inputClasses = classNames(
        "outline-none grow",
        { "cursor-progress bg-slate-100 text-slate-500": isPending },
    )
    const inputDivClasses = classNames(
        "flex items-center border-y-2 border-r-2 border-slate-100 text-black text-sm rounded-r-md py-1 px-2",
        { "cursor-progress bg-slate-100": isPending, "bg-white": !isPending },
    )
    const inputDivDivClasses = classNames(
        "bg-cyan-500 rounded-md pl-1",
        { "animate-pulse": isPending },
    )
    const errorSpanClasses = classNames(
        "bg-red-500 text-xs px-2 ease-in-out duration-300",
        //TODO: make error transition fade
        { "opacity-0": !showError },
        { "collapse": !showError },
    )
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }
    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") {
            return
        }

        const item: Item = { name: inputText }
        createItem(item)
    }

    useEffect(() => {
        if (isError) {
            console.error("Unable to create item")
            setShowError(true)
            setTimeout(() => setShowError(false), 3000)
        }
        if (isError || isSuccess) {
            reset()
            setInputText('')
        }
    }, [isError, isSuccess, reset])

    return (
        <div className="flex flex-col mb-2">
            <div className={inputDivDivClasses}>
                <div className={inputDivClasses}>
                    <input type="text" name="" id="" placeholder="Enter new todo item"
                        disabled={isPending}
                        value={inputText}
                        onChange={handleOnChange}
                        onKeyDown={handleOnKeyDown}
                        className={inputClasses}
                    ></input>
                </div>
            </div>
            <span className={errorSpanClasses}>Unable to create item</span>
        </div>
    )
}