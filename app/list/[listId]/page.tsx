'use client'

import { redirect, useRouter } from 'next/navigation'
import Link from "next/link"
import { useState, useEffect, useCallback } from 'react'
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import getList from "@/app/_components/lists/actions/getList"

export default function Page({ params }: { params: { listId: string } }) {
  const [redirectCountdown, setRedirectCountdown] = useState(3)
  const [isError, setIsError] = useState(false)
  const router = useRouter()
  const { setListId } = useListIdContext()
  const delayedRedirect = useCallback(() => {
    const key = setTimeout(() => {
        if (redirectCountdown <= 1) {
        router.push('/')
        return
      }

      setRedirectCountdown((r) => r - 1)
    }, 1000)

    return key
  }, [redirectCountdown, router])

  // for redirect countdown on error
  useEffect(() => {
    const key = delayedRedirect()
    return () => clearTimeout(key)
  }, [redirectCountdown, delayedRedirect])

  useEffect(() => {
    getList(params.listId)
      .then((list) => {
        setListId(params.listId)
      })
      .then(() => {
        router.push('/')
      })
      .catch(() => {
        setIsError(true)
        console.error("Unable to fetch requested list")
        delayedRedirect()
      })
  }, [])

  if (isError) {
    return (
        <div className="rounded-xl flex flex-col gap-2 items-center self-center bg-white text-black shadow-xl p-4 mx-4 w-[300px] md:w-[480px]" >
          <div className="mr-2 w-10 h-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
            </svg>
          </div>
          <h2>Unable to load list.</h2>
          <p className="text-xs">Redirecting in {redirectCountdown}</p>
          <Link href="/">
            <button className="bg-cyan-600 hover:bg-cyan-500 rounded-lg px-2 py-1 text-white text-sm">Back to Home</button>
          </Link>
        </div>
    )
  }

  return (
      <div className="rounded-xl flex flex-row items-center self-center bg-white shadow-xl p-4 mx-4 w-[300px] md:w-[480px]" >
        <div className="mr-2 w-4 h-4">
          <svg
            className="animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
          </svg>
        </div>
        <h2 className="text-black">Loading list...</h2>
      </div>
  )
}