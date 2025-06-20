import { atom } from 'jotai'

const STORAGE_KEY = 'cart'

const loadCart = (): string[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const baseCartAtom = atom<string[]>(loadCart())

export const cartAtom = atom(
  (get) => get(baseCartAtom),
  (_, set, newCart: string[]) => {
    set(baseCartAtom, newCart)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCart))
  }
)
