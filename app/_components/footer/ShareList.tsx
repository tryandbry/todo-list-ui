import { Dispatch, SetStateAction } from "react"
import classNames from "classnames"

export default function ShareList(
    { showShareBar, setShowShareBar }:
    { showShareBar: boolean, setShowShareBar: Dispatch<SetStateAction<boolean>>}
) {
    const buttonClasses = classNames(
        "rounded-3xl border-b-4 border-pink-500 hover:-translate-y-1 hover:duration-100 hover:shadow-pink-300 h-12 w-12 bg-pink-400 flex justify-center items-center shadow-xl",
        { "bg-pink-400": !showShareBar, "bg-pink-700": showShareBar },
    )
    const handleClick = () => {
        setShowShareBar(!showShareBar)
    }

    return (
        // <button className="rounded-3xl border-b-4 border-pink-500 hover:-translate-y-1 hover:duration-100 hover:shadow-pink-300 h-12 w-12 bg-pink-400 flex justify-center items-center shadow-xl"
        <button className={buttonClasses}
            onClick={handleClick}
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
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
        </button>
    )
}