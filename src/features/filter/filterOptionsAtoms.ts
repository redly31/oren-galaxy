import { atom } from "jotai";
import { phonesDataAtom } from "../../entities/phone/phonesAtom";

export const storageOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom);
  return Array.from(new Set(phones.map(p => p.storage))).sort((a, b) => a - b);
});

export const modelOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom);
  return Array.from(new Set(phones.map(p => p.model))).sort();
});

export const colorOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom);
  return Array.from(new Set(phones.map(p => p.color))).sort();
});
