'use client'

import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import ListHeader from "@/app/_components/lists/ListHeader"
import ItemsContainer from "@/app/_components/items/ItemsContainer"
import AddItem from "@/app/_components/items/AddItem"
import Items from "@/app/_components/items/Items"
import Footer from "@/app/_components/footer/Footer"

import { useEffect } from "react"
import getList from "@/app/_components/lists/actions/getList"
import createList from "@/app/_components/lists/actions/createList"
import useLocalStorage from "@/app/_shared/useLocalStorage"
import { useListIdContext } from "@/app/_components/lists/ListIdContext"

export default function App() {
  const { getLocal, setLocal } = useLocalStorage()
  const { listId, setListId } = useListIdContext()
  useEffect(() => {
      if (listId !== "") return

      const localListId = getLocal('listId')
      console.log("listId from local storage: ", localListId)
      getList(localListId)
          .then((list) => {
              if (list.listId) {
                  setListId(list.listId)
              }
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
          })
  }, [listId])
  return (
    <>
      <ListHeader />
      <ItemsContainer>
        <AddItem />
        <Items />
      </ItemsContainer>
      <Footer />
      <ReactQueryDevtools />
    </>
  );
}
