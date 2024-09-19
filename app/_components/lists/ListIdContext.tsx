import React, { createContext, useContext } from "react";

import { useListId } from "@/app/_components/lists/hooks/useListId"

const ListIdContext = createContext<ReturnType<typeof useListId>>({
    listId: "",
    setListId: () => {},
});

export const useListIdContext = () => useContext(ListIdContext)

export const ListIdContextProvider = ({
    children,
}: {
   children: React.ReactNode
}) => {
    const { listId, setListId } = useListId() 

    return (
        <ListIdContext.Provider value={{ listId, setListId }}>
            {children}
        </ListIdContext.Provider>
    )
}