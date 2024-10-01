import React, { createContext, useContext } from "react";

import { useListId } from "@/app/_components/lists/hooks/useListId"

const ListIdContext = createContext<ReturnType<typeof useListId>>({
    listId: "",
    setListId: () => {},
});

export const useListIdContext = () => useContext(ListIdContext)

export const ListIdContextProvider = ({
    children,
    value,
}: {
   children: React.ReactNode,
   value: ReturnType<typeof useListId> | null,
}) => {
    const { listId, setListId } = useListId() 

    if (!value) {
        return (
            <ListIdContext.Provider value={{ listId, setListId }}>
                {children}
            </ListIdContext.Provider>
        )
    }

    return (
        <ListIdContext.Provider value={value}>
            {children}
        </ListIdContext.Provider>
    )
}