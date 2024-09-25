'use client'

import { useEffect, useState } from "react"
import getList from "../actions/getList"
import createList from "../actions/createList"
import useLocalStorage from "@/app/_shared/useLocalStorage"

export function useListId() {
    const { getLocal, setLocal } = useLocalStorage()
    const [listId, setListId] = useState("")
    const updateListId = (listId: string) => {
        console.log("updateListId executing! arg: ", listId)
        setLocal('listId', listId)
        setListId(listId)
    }

    useEffect(() => {
        if (listId !== "") return

        const localListId = getLocal('listId')
        console.log("listId from local storage: ", localListId)
        getList(localListId)
            .then((list) => {
                if (list.listId) {
                    updateListId(list.listId)
                }
            })
            .catch(() => {
                console.error("Loading list ID from local storage failed.  Creating a new list as a fallback")
                const newListName = "My To Dos"
                return createList(newListName)
                    .catch(() => {
                        console.error("Initial list load failed")
                    })
            })
    }, [])

    return { listId, setListId: updateListId }
}