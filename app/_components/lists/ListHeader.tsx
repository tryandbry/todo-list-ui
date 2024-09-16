'use client'

import { useList } from "./hooks/useList"
import { List } from "@/app/_shared/types"

export default function ListHeader() {
    const list: List = useList()

    return (
        <div className="rounded-t-xl flex flex-col self-center bg-white shadow-xl pt-4 px-4 mx-4 w-[300px] md:w-[480px]" >
            <div className="flex flex-row mb-6">
                <input type="text" name="" id=""
                    value={list.name}
                    className="text-l text-black font-semibold mr-2 outline-none w-full grow" 
                ></input>
                <button className="rounded-sm shrink-0 text-sm py-0 5 px-5 border-2 border-slate-100 text-slate-500 font-semibold hover:bg-slate-50 hover-slate-200">
                    View All
                </button>
            </div>
        </div>
    )
}