'use client'

import classNames from "classnames"
import { useState, useEffect } from "react"
import { useListIdContext } from "../lists/ListIdContext"

export default function Sharebar({ show }: { show: boolean }) {
    const componentClasses = classNames(
        "rounded-xl flex flex-col self-center bg-white shadow-xl px-4 mx-4 w-[300px] md:w-[480px] ease-in-out duration-300",
        { "opacity-0 collapse h-0 py-0 my-0": !show, "my-2 py-2": show },
    )
    const [isCopied, setIsCopied] = useState(false)
    const [hostName, setHostName] = useState("")
    const { listId } = useListIdContext()
    const listLink = `${hostName}/list/${listId}`
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(listLink)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 1000)
        } catch (err) {
            console.error("Failed to copy to clipboard: ", err);
        }
    }
    const copyIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="w-4 h-4"
        >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    )
    const greenCheckIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="w-4 h-4"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    )
    const copiedTooltipClasses = classNames(
        "duration-300 transition-all absolute -translate-y-10 px-4 py-1 bg-slate-500 text-white text-center text-sm rounded-lg after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-slate-500",
        { "opacity-0 collapse": !isCopied },
    )
    const hoverTextClasses = classNames(
        "hidden transition-all absolute -translate-y-10 px-4 py-1 bg-slate-500 text-white text-center text-sm rounded-lg after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-slate-500",
        { "group-hover:flex": !isCopied },
    )

    // workaround to ensure "window" is available on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHostName(window.location.origin)
        }
    }, [])

    return (
        <div className={componentClasses}>
            <div className="flex flex-row items-center group">
                <p
                    className="font-mono text-sm text-slate-700 mr-1 outline-none w-full border rounded-md py-0.5 px-3 select-all truncate"
                >{listLink}</p>
                {/* <!-- Tooltip text --> */}
                <span className={copiedTooltipClasses}>
                    Copied!
                </span>
                <span className={hoverTextClasses}>
                    Share link to this list
                </span>
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-md hover:bg-slate-100 cursor-pointer"
                >
                    {isCopied ? greenCheckIcon : copyIcon}
                </button>
            </div>
        </div>
    )
}