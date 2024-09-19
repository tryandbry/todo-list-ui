'use client'

import createList from "@/app/_components/lists/actions/createList"
import { queryKeys } from "@/react-query/constants"
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import { useMutation, useQueryClient } from "@tanstack/react-query"

// TODO: not refreshing new list
export function useCreateList() {
    const queryClient = useQueryClient();
    const defaultListName = "My New Todo List"
    const { setListId } = useListIdContext()

    const { mutate } = useMutation({
        mutationFn: () => createList(defaultListName),
        onSuccess: (newList) => {
            if (newList?.listId) {
                setListId(newList.listId)
                console.log("Success! Just set the new list ID")
                queryClient.invalidateQueries({
                    queryKey: [queryKeys.list],
                })
            }
        },
    })

    return mutate
}