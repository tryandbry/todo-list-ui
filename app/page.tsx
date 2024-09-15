'use client'

import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { queryClient } from "@/react-query/queryClient"
import ListHeader from "@/app/lists/ListHeader"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ListHeader />
      {/* <Items /> */}
      {/* <Footer /> */}
    </QueryClientProvider>
  );
}
