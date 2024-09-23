'use client'

import { useCreateList } from "@/app/_components/lists/hooks/useCreateList"

export default function AddList() {
    const { mutate: createList } = useCreateList()
    return (
        <button
            className="rounded-3xl border-b-4 border-pink-500 hover:-translate-y-1 hover:duration-100 hover:shadow-pink-300 h-12 w-12 bg-pink-400 flex justify-center items-center shadow-xl"
            onClick={() => createList()}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
        </button>
    )
}