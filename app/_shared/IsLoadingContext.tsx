import React, { createContext, useContext } from "react";

import { useIsLoading } from "./useIsLoading"

const IsLoadingContext = createContext<ReturnType<typeof useIsLoading>>({
    isLoading: false,
    setIsLoading: () => {},
})

export const useIsLoadingContext = () => useContext(IsLoadingContext)

export const IsLoadingContextProvider = ({
    children,
}: {
   children: React.ReactNode
}) => {
    const { isLoading, setIsLoading } = useIsLoading() 

    return (
        <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </IsLoadingContext.Provider>
    )
}