import React, { createContext, useContext } from "react";

import { List } from "@/app/_shared/types"
import { useList } from "./hooks/useList"

const ListContext = createContext<List>({} as List);

export const useListContext = () => {
    const list = useContext(ListContext)

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