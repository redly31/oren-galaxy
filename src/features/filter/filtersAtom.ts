import { atom } from "jotai"
import type { Phone } from "../../shared/model/Phone"
import { phonesDataAtom } from "../../entities/phone/model/phonesAtom"

type FilterState = {
  price: [number, number]
  storage: number[]
  model: string[]
  color: string[]
  inStock: boolean
}

const initialFilters: FilterState = {
  price: [0, 999000],
  storage: [],
  model: [],
  color: [],
  inStock: false,
}

const filtersAtom = atom<FilterState>(initialFilters)
const getOptions = <K extends keyof Phone>(items: Phone[], key: K) => {
  const values = items.map((item) => item[key])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Array.from(new Set(values)).sort((a: any, b: any) => a - b)
}

const filterOptionsAtom = atom((get) => {
  const phones = get(phonesDataAtom)

  return {
    storage: getOptions(phones, "storage"),
    model: getOptions(phones, "model"),
    color: getOptions(phones, "color"),
  }
})

export { filterOptionsAtom, filtersAtom, type FilterState }
