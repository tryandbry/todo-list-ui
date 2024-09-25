'use client'

import createList from "@/app/_components/lists/actions/createList"
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import { useMutation } from "@tanstack/react-query"
import useLocalStorage from "@/app/_shared/useLocalStorage"

export function useCreateList() {
    const defaultListName = "New Todo List"
    const { setListId } = useListIdContext()
    const { getLocal, setLocal } = useLocalStorage()

    return useMutation({
        mutationFn: () => {
            console.log("useCreateList mutation executing!")
            return createList(defaultListName)
        },
        onSuccess: (newList) => {
            console.log("new list?", newList)
            if (newList?.listId) {
                console.log("passed if statement", newList.listId)
                setLocal('listId', newList.listId)
                setListId(newList.listId)
            }
        },
    })
}