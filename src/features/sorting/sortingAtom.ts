import { atom } from "jotai"
export type SortOption = "priceAsc" | "priceDesc" | "releaseDate"

export const sortingAtom = atom<SortOption>("releaseDate")
