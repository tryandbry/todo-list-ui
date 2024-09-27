'use client'

import { useState } from "react"

export function useIsLoading() {
    const [isLoading, setIsLoading] = useState(true)
    return { isLoading, setIsLoading }
}