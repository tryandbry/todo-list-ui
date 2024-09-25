'use client'

import { MouseEventHandler, useEffect } from "react"
import { List } from "@/app/_shared/types"
import { useStateWithDelayedFetch } from "@/app/_shared/useStateWithDelayedFetch"
import { useItemsContext } from "@/app/_components/items/ItemsContext"
import { showItemsValue } from "@/app/_components/items/hooks/useItems"
import { useListContext } from "./ListContext"
import { useUpdateList } from "./hooks/useUpdateList"

export default function ListHeader() {
    const TIMEOUT_DURATION = 2000
    const list: List = useListContext()
    const { showItems, incrementShowItems } = useItemsContext()
    const updateList = useUpdateList()
    const {
        data: listState,
        setData: setListState,
    } = useStateWithDelayedFetch(updateList, list, TIMEOUT_DURATION)

    // ensure [controlled] input state is synced with list context
    useEffect(() => {
        if (listState != list) {
            setListState(list, false)
        }
    }, [list])

    return (
        <div className="rounded-t-xl flex flex-col self-center bg-white shadow-xl pt-4 px-4 mx-4 w-[300px] md:w-[480px]" >
            <div className="flex flex-row mb-6">
                <input type="text" name="" id="input-list-name" placeholder="My new to do list"
                    value={listState.name}
                    className="text-l text-black font-semibold mr-2 outline-none w-full grow" 
                    onChange={(e) => setListState({
                        ...list,
                        name: e.target.value,
                    }, false)}
                ></input>
                <button 
                    className="rounded-sm shrink-0 text-xs py-0 5 px-2 border-2 border-slate-100 text-slate-500 font-semibold hover:bg-slate-50 hover-slate-200"
                    onClick={incrementShowItems as MouseEventHandler}
                >
                    {`${showItemsValue[showItems]}`}
                </button>
            </div>
        </div>
    )
}