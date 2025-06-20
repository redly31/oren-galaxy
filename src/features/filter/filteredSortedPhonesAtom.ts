import { atom } from "jotai";
import type { Phone } from '../../entities/phone/Phone'
import { searchAtom } from "../search/searchAtom";
import { sortingAtom } from "../sorting/sortingAtom";
import {
  priceFilterAtom,
  storageFilterAtom,
  modelFilterAtom,
  colorFilterAtom,
  inStockFilterAtom
} from "./filterAtoms";
import { phonesAtom } from "../../entities/phone/phonesAtom";

export const phonesDataAtom = atom((get) => get(phonesAtom).data ?? [])

export const filteredSortedPhonesAtom = atom<Phone[]>((get) => {
  const phones = get(phonesDataAtom)
  const search = get(searchAtom).toLowerCase()
  const [minPrice, maxPrice] = get(priceFilterAtom)
  const storagesSet = new Set(get(storageFilterAtom))
  const modelsSet = new Set(get(modelFilterAtom))
  const colorsSet = new Set(get(colorFilterAtom))
  const inStock = get(inStockFilterAtom)
  const sortBy = get(sortingAtom)

  let result = phones.filter(p => {
    if (search && !p.model.toLowerCase().includes(search) && !p.color.toLowerCase().includes(search)) {
      return false
    }
    if (p.price < minPrice || p.price > maxPrice) return false
    if (storagesSet.size && !storagesSet.has(p.storage)) return false
    if (modelsSet.size && !modelsSet.has(p.model)) return false
    if (colorsSet.size && !colorsSet.has(p.color)) return false
    if (inStock && !p.inStock) return false
    return true
  })

  if (sortBy) {
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'priceAsc': return a.price - b.price
        case 'priceDesc': return b.price - a.price
        case 'releaseDate': return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        default: return 0
      }
    })
  }

  return result
})
