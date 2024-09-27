'use client'

import { useState, useCallback, useEffect } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import { Item } from "@/app/_shared/types"
import { useListContext } from "@/app/_components/lists/ListContext"
import { useIsLoadingContext } from "@/app/_shared/IsLoadingContext"
import getItems from "../actions/getItems"

export enum showItemsValue {
    All,
    Incomplete,
    Complete,
}

export type UseItemsObject = {
    items: Item[];
    showItems: showItemsValue;
    incrementShowItems: Function;
}

export const useItemsStub: UseItemsObject = {
    items: [],
    showItems: 0,
    incrementShowItems: () => {},
}

export function useItems(): UseItemsObject {
    const { setIsLoading } = useIsLoadingContext()
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
        queryFn: () => {
            return getItems(listId)
                .then((items) => {
                    // show App after initial load
                    setIsLoading(false)
                    return items
                })
        },
        select: (data) => selectFn(data, showItems),
        enabled: !!listId,
        notifyOnChangeProps: "all",
    })

    const queryClient = useQueryClient()
    useEffect(() => {
        queryClient.invalidateQueries({
            queryKey: [queryKeys.list, queryKeys.items],
        })
    }, [list, queryClient])

    return { items, showItems, incrementShowItems }
}