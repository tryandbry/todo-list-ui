'use client'

import { List } from "@/app/_shared/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import getList from "@/app/_components/lists/actions/getList"

export function useList() {
    const { listId } = useListIdContext()
    const queryClient = useQueryClient()
    const fallback: List = { name: "My New Todo List" }

    const { data = fallback } = useQuery({
        queryKey: [queryKeys.list],
        queryFn: () => getList(listId),
    })

    return data
}