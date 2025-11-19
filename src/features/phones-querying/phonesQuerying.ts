import { atom } from "jotai"
import { searchAtom } from "../search/searchAtom"
import { sortingAtom } from "../sorting/sortingAtom"
import { filtersAtom } from "../filter/filtersAtom"
import { phonesAtom } from "../../entities/phone/model/phonesAtom"
import type { Phone } from "../../shared/model/Phone"

const filteredPhonesAtom = atom((get) => {
  const phones = get(phonesAtom).data ?? []
  const { price, storage, model, color, inStock } = get(filtersAtom)
  const query = get(searchAtom).toLowerCase().trim()

  const storageSet = new Set(storage)
  const modelSet = new Set(model)
  const colorSet = new Set(color)
  const [minPrice, maxPrice] = price

  return phones.filter((p) => {
    if (inStock && !p.inStock) return false
    if (p.price < minPrice || p.price > maxPrice) return false
    if (storageSet.size && !storageSet.has(p.storage)) return false
    if (modelSet.size && !modelSet.has(p.model)) return false
    if (colorSet.size && !colorSet.has(p.color)) return false
    if (
      query &&
      !p.model.toLowerCase().includes(query) &&
      !p.color.toLowerCase().includes(query)
    ) {
      return false
    }

    return true
  })
})

const sorters: Record<string, (a: Phone, b: Phone) => number> = {
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  releaseDate: (a, b) =>
    new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime(),
}

export const phonesListAtom = atom((get) => {
  const phones = get(filteredPhonesAtom)
  const sortBy = get(sortingAtom)

  if (!sortBy || !sorters[sortBy]) return phones

  return [...phones].sort(sorters[sortBy])
})
