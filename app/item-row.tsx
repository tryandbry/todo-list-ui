'use client'

import React, { useState, useRef, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Item } from "./lib/definitions"
import { updateItem } from "./lib/actions";

export default function ItemRow({ item }: { item: Item}) {
    const router = useRouter()
    const [itemId, setItemId] = useState(item.itemId)
    const [itemName, setItemName] = useState(item.name)
    const [itemCompleted, setItemCompleted] = useState(item.completed)
    const [isFetching, setIsFetching] = useState(false)
    const [isPending, startTransition] = useTransition()
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>()

    const isMutating = isFetching || isPending

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(e.target.value)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(async () => {
            setIsFetching(true)
            await updateItem({ itemId, name: e.target.value, completed: itemCompleted})
            setIsFetching(false)

            startTransition(() => {
                router.refresh();
            })
        }, 3000)
    }
    const changeCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemCompleted(!itemCompleted)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(async () => {
            setIsFetching(true)
            await updateItem({ itemId, name: itemName, completed: !itemCompleted})
            setIsFetching(false)

            startTransition(() => {
                router.refresh();
            })
        }, 3000)
    }
    return (
        <div style={{ opacity: !isMutating ? 1 : 0.7 }}>
            <p>Item Name: <input
                type="text"
                id="name"
                name="name"
                value={itemName}
                onChange={changeName}
            /></p>
            <p>Item ID: {itemId}</p>
            <p>Item Completed: <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={itemCompleted}
                onChange={changeCompleted}
            /></p>
        </div>
    )
}