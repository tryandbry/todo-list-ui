'use client'

import { useState } from "react"
import useLocalStorage from "@/app/_shared/useLocalStorage"

export function useListId() {
    const { setLocal } = useLocalStorage()
    const [listId, setListId] = useState("")
    const updateListId = (listId: string) => {
        setLocal('listId', listId)
        setListId(listId)
    }


    return { listId, setListId: updateListId }
}