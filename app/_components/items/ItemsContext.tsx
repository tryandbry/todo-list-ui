import React, { createContext, useContext, useState } from "react";

import { Item } from "@/app/_shared/types"
import { useItems, useItemsStub } from "./hooks/useItems"

const ItemsContext = createContext(useItemsStub);

export const useItemsContext = () => {
    const items = useContext(ItemsContext)

    return items
}

export const ItemsContextProvider = ({
    children,
}: {
   children: React.ReactNode
}) => {
    const useItemsObject = useItems()

    return (
        <ItemsContext.Provider value={ useItemsObject }>
            {children}
        </ItemsContext.Provider>
    )
}