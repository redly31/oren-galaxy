import { atom } from "jotai";
import type { SortOption } from "./SortOption";


export const sortingAtom = atom<SortOption>(
  "releaseDate"
);
