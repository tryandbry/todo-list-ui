'use client'

import { useTransition, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Item } from "./lib/definitions"
import { updateItem } from "./lib/actions";
import { useDelayedFetch } from "./use-delayed-fetch"

export default function ItemRow({ item }: { item: Item}) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const transitionFn = useCallback(() => {
        startTransition(() => {
            router.refresh()
        })
    }, [router])
    const {
        isFetching,
        error,
        fetchedData: itemState,
        setFetchedData: setItemState
    } = useDelayedFetch(updateItem, item, transitionFn)
    const isMutating = isFetching || isPending
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemState({ ...itemState, name: e.target.value })
    }
    const changeCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemState({ ...itemState, completed: !itemState.completed })
    }
    return (
        <div style={{ opacity: !isMutating ? 1 : 0.7 }}>
            <p>Item Name: <input
                type="text"
                id="name"
                name="name"
                value={itemState.name}
                onChange={changeName}
            /></p>
            <p>Item ID: {itemState.itemId}</p>
            <p>Item Completed: <input
                type="checkbox"
                id="completed"
                name="completed"
                checked={itemState.completed}
                onChange={changeCompleted}
            /></p>
        </div>
    )
}