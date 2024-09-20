import AddList from "./AddList"
import ShareList from "./ShareList"
// import TrashList from "./TrashList"

export default function Footer() {
    return (
        <div className="flex flex-row p-4 gap-2">
            <AddList />
            <ShareList />
            {/* <TrashList /> */}
        </div>
    )
}