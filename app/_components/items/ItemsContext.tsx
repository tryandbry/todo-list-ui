import React, { createContext, useContext, useState } from "react";

import { Item } from "@/app/_shared/types"
import { useItems } from "./hooks/useItems"

const ItemsContext = createContext<Item[] | null>(null);

export const useItemsContext = () => {
    const items = useContext(ItemsContext)

    return items
}

export const ItemsContextProvider = ({
    children,
}: {
   children: React.ReactNode
}) => {
    const items = useItems()

    return (
        <ItemsContext.Provider value={ items }>
            {children}
        </ItemsContext.Provider>
    )
}