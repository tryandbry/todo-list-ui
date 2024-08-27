import { fetchItems, fetchList } from "./lib/data";
import { List, Item } from "./lib/definitions";
import ListInfo from "./list-info"
import ItemRow from "./item-row";
// import ItemCollection from "./item-collection";
import { updateItem } from "./lib/actions";

export default async function Home() {
  let listId = '1a471262-5523-4410-ae6c-960bfe0772f6';
  let list: List = await fetchList(listId)
  let items: Item[] = await fetchItems(listId)
  console.log("fetched list: ", list)
  console.log("fetched items: ", items)
  return (
    <div>
      <ListInfo list={list} />
      <ul>
          {items.map((item) => (
              <li key={item.itemId}><ItemRow item={item} updateItem={updateItem} /></li>
          ))}
      </ul>
      {/* <ItemCollection items={items} /> */}
    </div>
  );
}