import { atom } from "jotai";
import { getPhones } from '../../entities/phone/PhoneAPI'
import type { Phone } from '../../entities/phone/Phone'
import { atomWithQuery } from "jotai-tanstack-query";
import { searchAtom } from "../search/searchAtom";
import { sortingAtom } from "../sorting/sortingAtom";


export const priceFilterAtom = atom<[number, number]>([0, 500000])
export const storageFilterAtom = atom<number[]>([])
export const modelFilterAtom   = atom<string[]>([])
export const colorFilterAtom   = atom<string[]>([])
export const inStockFilterAtom = atom(false)

export const phonesAtom = atomWithQuery<Phone[]>(() => ({
  queryKey: ['phones'],
  queryFn: getPhones,
}))

export const phonesDataAtom = atom((get) => get(phonesAtom).data ?? [])

//память
export const storageOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom)
  return Array.from(new Set(phones.map(p => p.storage))).sort((a,b) => a - b)
})

// модели
export const modelOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom)
  return Array.from(new Set(phones.map(p => p.model))).sort()
})

// цвета
export const colorOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom)
  return Array.from(new Set(phones.map(p => p.color))).sort()
})

////////

export const filteredSortedPhonesAtom = atom<Phone[]>((get) => {
  const phones = get(phonesDataAtom)
  const search    = get(searchAtom).toLowerCase()
  const [minPrice, maxPrice] = get(priceFilterAtom)
  const storages  = new Set(get(storageFilterAtom))
  const models    = new Set(get(modelFilterAtom))
  const colors    = new Set(get(colorFilterAtom))
  const inStock   = get(inStockFilterAtom)
  const sortBy    = get(sortingAtom)

  // 1) Поиск по модели
  let result = phones.filter(p =>
    !search || p.model.toLowerCase().includes(search)
  )

  // 2) Цена
  result = result.filter(p =>
    p.price >= minPrice && p.price <= maxPrice
  )

  // 3) Остальные фильтры (если не пусты — применяем)
  if (storages.size) result = result.filter(p => storages.has(p.storage))
  if (models.size)   result = result.filter(p => models.has(p.model))
  if (colors.size)   result = result.filter(p => colors.has(p.color))
  if (inStock)       result = result.filter(p => p.inStock)

  // 4) Сортировка
  result = result.slice().sort((a, b) => {
    switch (sortBy) {
      case 'priceAsc':    return a.price - b.price
      case 'priceDesc':   return b.price - a.price
      case 'releaseDate': return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
      default: return 0
    }
  })

  return result
})