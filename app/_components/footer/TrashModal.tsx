import { Dispatch, SetStateAction } from "react"
import classNames from "classnames"

import { useListIdContext } from "../lists/ListIdContext"
import { useDeleteList } from "@/app/_components/lists/hooks/useDeleteList"
import { useCreateList } from "@/app/_components/lists/hooks/useCreateList"

export default function TrashModal(
    { showTrashModal, setShowTrashModal }:
    { showTrashModal: boolean, setShowTrashModal: Dispatch<SetStateAction<boolean>>}
) {
    const componentClasses = classNames(
        {"hidden": !showTrashModal },
    )
    const handleCancel = () => {
        setShowTrashModal(false)
    }
    const { listId, setListId } = useListIdContext()
    const deleteList = useDeleteList()
    const createList = useCreateList()
    const handleConfirm = () => {
        // TODO: handle errors
        deleteList(listId)
        createList()
        setShowTrashModal(false)
    }
    return (
        <div className={componentClasses}>
            <div className="absolute top-0 left-0 h-screen bg-black w-full opacity-70"></div>
            <div className="absolute flex justify-center top-0 left-0 h-screen w-full z-10">
                <div className="flex flex-col justify-center">
                    <div className="bg-slate-900 text-white rounded-xl shadow-xl w-[300px] md:w-[480px] flex flex-col items-center px-4 py-11 gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        <h2>Delete List?</h2>
                        <div className="flex flex-row gap-2">
                            <button onClick={handleCancel} className="rounded-lg bg-slate-500 hover:bg-slate-600 px-4 py-2">Cancel</button>
                            <button onClick={handleConfirm} className="rounded-lg bg-pink-500 hover:bg-pink-600 px-4 py-2">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}