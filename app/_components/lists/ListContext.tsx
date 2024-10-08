import React, { createContext, useContext } from "react";

import { List } from "@/app/_shared/types"
import { useList } from "./hooks/useList"

const ListContext = createContext<List | null>({} as List);

export const useListContext = () => useContext(ListContext)

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