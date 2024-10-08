'use client'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import ListHeader from "@/app/_components/lists/ListHeader"
import AddItem from "@/app/_components/items/AddItem"
import Items from "@/app/_components/items/Items"
import Footer from "@/app/_components/footer/Footer"

import { useEffect, Suspense } from "react"
import getList from "@/app/_components/lists/actions/getList"
import createList from "@/app/_components/lists/actions/createList"
import useLocalStorage from "@/app/_shared/useLocalStorage"
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import { useIsLoadingContext } from "@/app/_shared/IsLoadingContext"
import Loading from "@/app/loading"

export default function App() {
  // either load the last list [from local storage]
  // or else create a new list
  const { isLoading, setIsLoading } = useIsLoadingContext()
  const { getLocal } = useLocalStorage()
  const { listId, setListId } = useListIdContext()
  useEffect(() => {
      if (listId !== "") return

      setIsLoading(true)
      const localListId = getLocal('listId')
      getList(localListId)
          .then((list) => {
            if (!list?.listId) {
              throw new Error("Unable to fetch last used list")
            }

            setListId(list.listId)
          })
          .catch(() => {
            console.error("Loading list ID from local storage failed.  Creating a new list as a fallback")
            const newListName = "My New List"
            createList(newListName)
              .then((newList) => {
                if (newList?.listId) {
                    setListId(newList?.listId)
                }
              })
              .catch(() => {
                console.error("Failed to create a new list")
              })
          })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <>
      <ListHeader />
      <AddItem />
      <Items />
      <Footer />
      <ReactQueryDevtools />
    </>
  );
}
