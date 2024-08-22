import { List } from "./lib/definitions"

export default function ListInfo({ list }: { list: List }) {
    return (
        <div>
            <p>List Name: {list.name}</p>
            <p>list uuid: {list.listId}</p>
            <p>list created at: {new Date(list.createdAt).toString()}</p>
            <p>list updated at: {new Date(list.updatedAt).toString()}</p>
        </div>
    )
}