'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useListIdContext } from "@/app/_components/lists/ListIdContext"
import getList from "@/app/_components/lists/actions/getList"

export default function Page({ params }: { params: { listId: string } }) {
    const [isError, setIsError] = useState(false)
    const router = useRouter()
    const { setListId } = useListIdContext()
    getList(params.listId)
      .then((list) => {
        setListId(params.listId)
      })
      .then(() => router.push('/'))
      .catch(() => {
        setIsError(true)
        console.error("Unable to fetch requested list")
        setTimeout(() => {
            router.push('/')
        }, 2000)
      })

    if (isError) {
        return (
            <h2>Unable to load list.  Redirecting...</h2>
        )
    }

    return (
        <h2>Loading list...</h2>
    )
}