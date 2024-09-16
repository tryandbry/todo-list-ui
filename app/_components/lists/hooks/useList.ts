'use client'

import { List } from "@/app/_shared/types"
import { useQuery } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import getList from "@/app/_components/lists/actions/getList"

export function useList() {
    const fallback: List = { listId: "placeholder", name: "My New Todo List" }
    const { data = fallback } = useQuery({
        queryKey: [queryKeys.list],
        queryFn: getList,
    })

    return data
}