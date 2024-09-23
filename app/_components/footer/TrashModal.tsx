import { Dispatch, SetStateAction, useEffect } from "react"
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
        resetDelete()
        resetCreate()
        setShowTrashModal(false)
    }
    const { listId, setListId } = useListIdContext()
    const { mutate: deleteList, isPending: pendingDelete, isError: errorDelete, isSuccess: successDelete, reset: resetDelete } = useDeleteList()
    const { mutate: createList, isPending: pendingCreate, isError: errorCreate, isSuccess: successCreate, reset: resetCreate } = useCreateList()
    const isPending = pendingDelete || pendingCreate
    const isError = errorDelete || errorCreate
    const confirmButtonClasses = classNames(
        "rounded-lg px-4 py-2",
        {"bg-pink-500 hover:bg-pink-600": !isError, "bg-slate-800 cursor-not-allowed text-black": isError}
    )
    const spinnerClasses = classNames(
        "mr-2 w-4 h-4",
        {"hidden": !isPending || isError },
    )
    const errorMessageClasses = classNames(
        {"hidden": !isError },
    )
    const handleConfirm = () => {
        deleteList(listId)
        createList()
    }

    useEffect(() => {
        // hide modal if old list is deleted and new list is ready
        if (successDelete && successCreate) {
            resetDelete()
            resetCreate()
            setShowTrashModal(false)
        }
    }, [successDelete, successCreate, resetCreate, resetDelete, setShowTrashModal] )

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
                            <button onClick={handleConfirm} className={confirmButtonClasses} disabled={isError}>
                                <div className="flex flex-row items-center">
                                    {/* spinner */}
                                    <div className={spinnerClasses}>
                                        <svg
                                            className="animate-spin fill-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                                            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
                                        </svg>
                                    </div>
                                    Confirm
                                </div>
                            </button>
                        </div>
                        <p className={errorMessageClasses}>Something went wrong :(</p>
                    </div>
                </div>
            </div>
        </div>
    )
}