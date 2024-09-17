'use client'
import { useState, useRef, useEffect } from 'react'

/** 
 * Manages state for a controlled input component while batching [mutation] changes.
 * Optionally allows for immediate mutation.
 * @param {Function} mutateFn - the mutation function
 * @param {Type} initialData - data to initialize state
 * @param {number} timeoutDelay - timeout duration in milliseconds (ms)
 */
export function useStateWithDelayedFetch<Type>(mutateFn: Function, initialData: Type, timeoutDelay: number) {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState<Error | undefined>()
    const [data, setData] = useState(initialData)
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>()
    const timeoutDuration = useRef(timeoutDelay)

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
        }, timeoutDuration.current)

        return () => clearTimeout(timeout.current)
    }, [data, mutateFn, timeoutDuration])

    const setDataWithOptions = (updatedData: Type, immediate: boolean) => {
        timeoutDuration.current = immediate ? 0 : timeoutDelay
        setData(updatedData)
    }

    return {
        isPending,
        isError: error ? true : false,
        error,
        data,
        setData: setDataWithOptions,
    }
}