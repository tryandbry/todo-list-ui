import { ReactNode } from "react"

export default function ItemsContainer({
    children,
}: {
   children: React.ReactNode,
}) {
    return (
      <div className="rounded-b-xl flex flex-col self-center bg-white shadow-xl pb-4 px-4 mx-4 w-[300px] md:w-[480px] overflow-auto" >
        {children}
      </div>
    )
}