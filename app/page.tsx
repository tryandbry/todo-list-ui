import { fetchItems, fetchList } from "./lib/data";
import { List, Item } from "./lib/definitions";
import ListInfo from "./list-info"
import ItemCollection from "./item-collection";

export default async function Home() {
  let listId = '1a471262-5523-4410-ae6c-960bfe0772f6';
  let list: List = await fetchList(listId)
  let items: Item[] = await fetchItems(listId)
  console.log("fetched list: ", list)
  console.log("fetched items: ", items)
  return (
    <div>
      <ListInfo list={list} />
      <ItemCollection items={items} />
    </div>
  );
}