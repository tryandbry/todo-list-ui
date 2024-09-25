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


    return { listId, setListId: updateListId }
}