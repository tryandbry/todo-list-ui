import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import ListHeader from "@/app/_components/lists/ListHeader"
import ItemsContainer from "@/app/_components/items/ItemsContainer"
import AddItem from "@/app/_components/items/AddItem"
import Items from "@/app/_components/items/Items"
import Footer from "@/app/_components/footer/Footer"

export default function App() {
  return (
    <>
      <ListHeader />
      <ItemsContainer>
        <AddItem />
        <Items />
      </ItemsContainer>
      <Footer />
      <ReactQueryDevtools />
    </>
  );
}
