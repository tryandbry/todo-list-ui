import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import ListHeader from "@/app/_components/lists/ListHeader"
import Items from "@/app/_components/items/Items"
import Footer from "@/app/_components/footer/Footer"

export default function App() {
  return (
    <>
      <ListHeader />
      <Items />
      <Footer />
      <ReactQueryDevtools />
    </>
  );
}
