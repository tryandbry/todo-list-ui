'use client'

import { List } from "@/app/_shared/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import getList from "@/app/_components/lists/actions/getList"

export function useList() {
    const queryClient = useQueryClient()
    const fallback: List = { name: "My New Todo List" }

    const { data = fallback } = useQuery({
        queryKey: [queryKeys.list],
        queryFn: getList,
    })

    return data
}