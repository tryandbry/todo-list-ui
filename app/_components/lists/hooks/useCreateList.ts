'use client'

import createList from "@/app/_components/lists/actions/createList"
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import { useMutation } from "@tanstack/react-query"

export function useCreateList() {
    const defaultListName = "Newly Created Todo List"
    const { setListId } = useListIdContext()

    return useMutation({
        mutationFn: () => createList(defaultListName),
        onSuccess: (newList) => {
            if (newList?.listId) {
                setListId(newList.listId)
            }
        },
    })
}