import { Item } from "@/app/_shared/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import updateItem from "../actions/updateItem"

export function useUpdateItem() {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: (item: Item) => updateItem(item),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.list, queryKeys.items],
            })
        }
    })

    return mutate
}