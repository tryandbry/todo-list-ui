import { useMutation, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import deleteItem from "../actions/deleteItem"

export function useDeleteItem() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (itemId: string) => deleteItem(itemId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.list, queryKeys.items],
            })
        }
    })
}