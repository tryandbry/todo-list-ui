import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import ListHeader from "@/app/_components/lists/ListHeader"

export default function App() {
  return (
    <>
      <ListHeader />
      {/* <Items /> */}
      {/* <Footer /> */}
      <ReactQueryDevtools />
    </>
  );
}
