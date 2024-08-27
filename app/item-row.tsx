'use client'

import { useState, useEffect, useRef } from 'react'
import { Item } from "./lib/definitions"

export default function ItemRow({
    item,
    updateItem
}: {
    item: Item,
    updateItem: (item: Item) => Promise<Item>,
}) {
    let n: ReturnType<typeof setTimeout>;
    const [itemState, setItem] = useState(item)
    const timerId = useRef(n)
    const didMount = useRef(false)

    const changeName = (e) => {
        console.log(`updating item name: ${e.target.value}`)
        setItem({ ...itemState, name: e.target.value })
    }
    useEffect(function() {
        console.log("useEffect executing")
        console.log(`timerId: ${timerId.current}`)
        // ignore initial render
        if (!didMount.current) {
            console.log('initial render')
            didMount.current = true
            return
        }

        console.log('subsequent render')
        if (timerId.current) {
            clearTimeout(timerId.current)
        }

        timerId.current = setTimeout(() => updateItem(itemState), 3000)
    }, [itemState, updateItem])
    return (
        <div>
            <p>Item Name: <input
              type="text"
              id="name"
              name="name"
              value={itemState.name}
              onChange={changeName}
            /></p>
            <p>Item ID: {itemState.itemId}</p>
            <p>Item Completed: <input type="checkbox" id="completed" name="completed" checked={itemState.completed} /></p>
            <p>Item created at: {new Date(itemState.createdAt).toString()}</p>
            <p>Item updated at: {new Date(itemState.updatedAt).toString()}</p>
        </div>
    )
}