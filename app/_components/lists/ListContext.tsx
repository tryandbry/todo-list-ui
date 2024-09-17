import React, { createContext, useContext, useState } from "react";

import { List } from "@/app/_shared/types"
import { useList } from "./hooks/useList"

const ListContext = createContext<List | null>(null);

export const useListContext = () => {
    const list = useContext(ListContext)
    if (!list) {
        throw new Error('ListContext: No value provided')
    }

    return list
}

export const ListContextProvider = ({
    children,
}: {
   children: React.ReactNode
}) => {
    const list = useList()

    return (
        <ListContext.Provider value={ list }>
            {children}
        </ListContext.Provider>
    )
}