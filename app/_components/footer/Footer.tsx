'use client'

import { useState } from "react"
import ShareBar from "./ShareBar"
import AddList from "./AddList"
import ShareList from "./ShareList"
import TrashList from "./TrashList"
import TrashModal from "./TrashModal"

export default function Footer() {
    const [showShareBar, setShowShareBar] = useState(false)
    const [showTrashModal, setShowTrashModal] = useState(false)
    return (
        <>
            <ShareBar show={showShareBar} />
            <TrashModal showTrashModal={showTrashModal} setShowTrashModal={setShowTrashModal} />
            <div className="flex flex-row p-4 gap-2">
                <AddList />
                <ShareList showShareBar={showShareBar} setShowShareBar={setShowShareBar} />
                <TrashList showTrashModal={showTrashModal} setShowTrashModal={setShowTrashModal} />
            </div>
        </>
    )
}