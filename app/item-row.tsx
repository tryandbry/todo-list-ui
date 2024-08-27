'use client'

import React, { useState, useRef } from 'react'
import { Item } from "./lib/definitions"
import { updateItem } from "./lib/actions";

export default function ItemRow({ item }: { item: Item}) {
    const [itemId, setItemId] = useState(item.itemId)
    const [itemName, setItemName] = useState(item.name)
    const [itemCompleted, setItemCompleted] = useState(item.completed)
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>()

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(e.target.value)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            updateItem({ itemId, name: e.target.value, completed: itemCompleted})
        }, 3000)
    }
    const changeCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemCompleted(!itemCompleted)
        clearTimeout(timeout.current)
        timeout.current = setTimeout(() => {
            updateItem({ itemId, name: itemName, completed: !itemCompleted})
        }, 3000)
    }
    return (
        <div>
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