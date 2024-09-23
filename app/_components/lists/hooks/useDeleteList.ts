import { useMutation, useQueryClient } from "@tanstack/react-query"

import deleteList from "../actions/deleteList"

export function useDeleteList() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (listId: string) => deleteList(listId),
    })
}