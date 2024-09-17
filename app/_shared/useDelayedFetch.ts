'use client'
import { useState, useRef, useEffect } from 'react'

export function useStateWithDelayedFetch<Type>(mutateFn: Function, initialData: Type, timeoutDuration: number) {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<Error | undefined>()
    const [data, setData] = useState(initialData)
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>()
    useEffect(() => {
        timeout.current = setTimeout(async () => {
            setIsPending(true)
            try {
                await mutateFn(data)
            } catch (err) {
                console.error("useDelayedFetch error: ", err)
                setError(new Error('failed to fetch data'))
            }
            setIsPending(false)
        }, timeoutDuration)

        return () => clearTimeout(timeout.current)
    }, [data, mutateFn, timeoutDuration])

    return {
        isPending,
        isError: error ? true : false,
        error,
        data,
        setData,
    }
}