import { Item } from "@/app/_shared/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import { useListIdContext } from "../../lists/ListIdContext"
import createItem from "../actions/createItem"

export function useCreateItem() {
    const queryClient = useQueryClient();
    const { listId } = useListIdContext();

    return useMutation({
        mutationFn: (item: Item) => createItem(listId, item),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.list, queryKeys.items],
            })
        }
    })
}