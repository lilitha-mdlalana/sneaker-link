import { useShoeStore } from "~/store/shoes"

export const useFilteredShoes = () => {
    const store = useShoeStore()
    return computed(()=> store.filteredShoes)
}