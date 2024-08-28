'use client'
import { useState, useRef, useEffect, startTransition } from 'react'

export function useDelayedFetch(fetchFn, initialData, transitionFn) {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState<Error | undefined>()
    const [fetchedData, setFetchedData] = useState(initialData)
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>()
    useEffect(() => {
        timeout.current = setTimeout(async () => {
            setIsFetching(true)
            try {
                await fetchFn(fetchedData)
            } catch (err) {
                console.error("useDelayedFetch error: ", err)
                setError(new Error('failed to fetch data'))
            }
            setIsFetching(false)

            transitionFn()
        }, 3000)

        return () => clearTimeout(timeout.current)
    }, [fetchedData, fetchFn, transitionFn])

    return {
        isFetching,
        error,
        fetchedData,
        setFetchedData,
    }
}