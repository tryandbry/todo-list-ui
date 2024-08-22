import { fetchList } from "./lib/data";

export default async function Home() {
  let listArray = await fetchList()
  console.log("fetched list array: ", listArray)
  return (
    <div>
      <p>List Name: {listArray[0].name}</p>
      <p>List UUID: {listArray[0].listId}</p>
      <p>List created at: {new Date(listArray[0].createdAt).toString()}</p>
      <p>List updated at: {new Date(listArray[0].updatedAt).toString()}</p>
    </div>
  );
}