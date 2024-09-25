'use client'

export default function useLocalStorage() {
    const getLocal = (key: string): (string | null) => {
        const json = localStorage.getItem(key)
        try {
            if (!json) return null

            return JSON.parse(json)
        } catch {
            return null
        }
    }

    const setLocal = (key: string, value: string) => {
        const json = JSON.stringify(value)
        localStorage.setItem(key, json)
    }

    return { getLocal, setLocal }
}