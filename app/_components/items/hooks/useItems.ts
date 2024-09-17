'use client'

import { Item } from "@/app/_shared/types"
import { useQuery } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import getItems from "../actions/getItems"
import { useListContext } from "@/app/_components/lists/ListContext"

export function useItems() {
    const list = useListContext()
    const fallback: Item[] = []

    const { data = fallback } = useQuery({
        queryKey: [queryKeys.list, queryKeys.items],
        queryFn: () => getItems(list.listId),
        enabled: !!list.listId,
    })

    return data
}