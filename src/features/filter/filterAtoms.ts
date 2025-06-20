import { atom } from "jotai";

export const priceFilterAtom = atom<[number, number]>([0, 999000]);
export const storageFilterAtom = atom<number[]>([]);
export const modelFilterAtom = atom<string[]>([]);
export const colorFilterAtom = atom<string[]>([]);
export const inStockFilterAtom = atom(false);