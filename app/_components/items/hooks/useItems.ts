'use client'

import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/react-query/constants"
import { useState, useCallback, useEffect } from "react"

import { Item } from "@/app/_shared/types"
import { useListContext } from "@/app/_components/lists/ListContext"
import getItems from "../actions/getItems"

export enum showItemsValue {
    All,
    Incomplete,
    Complete,
}

export const useItemsStub: ReturnType<typeof useItems> = {
    items: [] as Item[],
    showItems: 0,
    incrementShowItems: () => {},
}

export function useItems() {
    const list = useListContext()
    const listId = list?.listId
    const fallback: Item[] = []

    const [showItems, setShowItems] = useState(showItemsValue.All)

    const incrementShowItems = () => {
        switch (showItems) {
            case 2:
                setShowItems(0)
                break
            default:
                setShowItems(showItems + 1)
        }
    }

    const selectFn = useCallback((data: Item[], showItems: showItemsValue) => {
        switch (showItems) {
            case showItemsValue.All:
                return data
            case showItemsValue.Incomplete:
                return data.filter((item) => !item.completed)
            case showItemsValue.Complete:
                return data.filter((item) => item.completed)
            default:
                return data
        }
    }, [])

    const { data: items = fallback } = useQuery({
        queryKey: [queryKeys.list, queryKeys.items],
        queryFn: () => getItems(listId),
        select: (data) => selectFn(data, showItems),
        enabled: !!listId,
    })

    return { items, showItems, incrementShowItems }
}