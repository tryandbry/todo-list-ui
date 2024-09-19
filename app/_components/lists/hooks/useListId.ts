'use client'

import { useState } from "react"

export function useListId() {
    // TODO: retrieve listId from local storage
    const initialListId = '1a471262-5523-4410-ae6c-960bfe0772f6' 

    const [listId, setListId] = useState(initialListId)

    return { listId, setListId }
}