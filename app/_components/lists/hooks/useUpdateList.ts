import { List } from "@/app/_shared/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { queryKeys } from "@/react-query/constants"
import updateList from "../actions/updateList"

export function useUpdateList() {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: (list: List) => updateList(list),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [queryKeys.list],
            })
        }
    })

    return mutate
}