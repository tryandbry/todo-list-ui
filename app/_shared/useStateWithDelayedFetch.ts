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
    const prevData = useRef<Type>(initialData)
    const timeout = useRef<ReturnType<typeof setTimeout> | undefined>()
    const timeoutDuration = useRef(timeoutDelay)

    useEffect(() => {
        // guard clause to prevent unnecessary updates if data has not changed.
        if (data === prevData.current) {
            return
        }

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

    // store previous [data] state to prevent unnecessary PATCH requests
    // Note: must be after the above useEffect to ensure that prevData doesn't get
    //       refreshed BEFORE the guard clause
    useEffect(() => {
        prevData.current = data
    }, [data])

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