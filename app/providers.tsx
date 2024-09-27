'use client'

import {
    isServer,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query"

import { ListContextProvider } from "@/app/_components/lists/ListContext"
import { ListIdContextProvider } from "@/app/_components/lists/ListIdContext"
import { ItemsContextProvider } from "@/app/_components/items/ItemsContext"
import { IsLoadingContextProvider } from "@/app/_shared/IsLoadingContext"

function makeQueryClient() {
    return new QueryClient()
    // return new QueryClient({
    //     defaultOptions: {
    //         queries: {
    //             // With SSR, we usually want to set some default staleTime
    //             // above 0 to avoid refetching immediately on the client
    //             staleTime: 60 * 1000,
    //         }
    //     }
    // })
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if (isServer) {
        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
            return browserQueryClient
    }
}

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const queryClient = getQueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <IsLoadingContextProvider>
                <ListIdContextProvider>
                    <ListContextProvider>
                        <ItemsContextProvider>
                            {children}
                        </ItemsContextProvider>
                    </ListContextProvider>
                </ListIdContextProvider>
            </IsLoadingContextProvider>
        </QueryClientProvider>
    )
}