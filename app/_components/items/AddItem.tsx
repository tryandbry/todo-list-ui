export default function AddItem() {
    return (
        <div className="flex flex-col mb-2">
            <div className="bg-cyan-500 rounded-md pl-1">
                <div className="flex items-center bg-white border-y-2 border-r-2 border-slate-100 rounded-r-md py-1 px-2">
                    <input type="text" name="" id="" placeholder="Enter new todo item"
                        className="outline-none grow"
                    ></input>
                </div>
            </div>
        </div>
    )
}