import { Dispatch, SetStateAction } from "react"
import classNames from "classnames"

export default function TrashList(
    { showTrashModal, setShowTrashModal }:
    { showTrashModal: boolean, setShowTrashModal: Dispatch<SetStateAction<boolean>>}
) {
    const buttonClasses = classNames(
        "rounded-3xl border-b-4 border-pink-500 hover:-translate-y-1 hover:duration-100 hover:shadow-pink-300 h-12 w-12 bg-pink-400 flex justify-center items-center shadow-xl",
        { "bg-pink-400": !showTrashModal, "bg-pink-700": showTrashModal },
    )
    const handleClick = () => {
        setShowTrashModal(!showTrashModal)
    }

    return (
        <button className={buttonClasses}
            onClick={handleClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6 fill-white">
                {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
        </button>
    )
}