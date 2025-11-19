import React, { useEffect, useRef } from "react"
import { useAtom, useAtomValue } from "jotai"
import { FilterSection } from "./FilterSection"
import { filterOptionsAtom, filtersAtom, type FilterState } from "./filtersAtom"

export const Filters: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [filters, setFilters] = useAtom(filtersAtom)
  const options = useAtomValue(filterOptionsAtom)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onClose])

  const toggleFilter = (key: keyof FilterState, value: string | number) => {
    setFilters((prev) => {
      const list = prev[key] as (string | number)[]

      const newList = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value]

      return { ...prev, [key]: newList }
    })
  }

  const updatePrice = (index: 0 | 1, val: string) => {
    setFilters((prev) => {
      const newPrice = [...prev.price] as [number, number]
      newPrice[index] = +val
      return { ...prev, price: newPrice }
    })
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
      onClick={onClose}
    >
      <div
        className="bg-back flex flex-col w-96 gap-4 px-4 py-3 border-4 border-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Цена */}
        <section>
          <h3 className="font-bold">Цена</h3>
          <div className="flex gap-2 mt-1">
            {[0, 1].map((idx) => (
              <input
                key={idx}
                ref={idx === 0 ? inputRef : null}
                className="w-full px-2 py-1 border-2 border-text outline-none"
                type="number"
                placeholder={String(filters.price[idx])}
                onChange={(e) => updatePrice(idx as 0 | 1, e.target.value)}
              />
            ))}
          </div>
        </section>

        {/* Группы фильтров */}
        <FilterSection
          title="Память"
          options={options.storage}
          selected={filters.storage}
          onToggle={(v) => toggleFilter("storage", v)}
          formatLabel={(s) => `${s} ГБ`}
        />
        <FilterSection
          title="Модели"
          options={options.model}
          selected={filters.model}
          onToggle={(v) => toggleFilter("model", v)}
        />
        <FilterSection
          title="Цвета"
          options={options.color}
          selected={filters.color}
          onToggle={(v) => toggleFilter("color", v)}
        />

        {/* Наличие */}
        <section>
          <h3 className="font-bold">Наличие</h3>
          <label className="cursor-pointer select-none flex gap-2 items-center">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, inStock: e.target.checked }))
              }
            />
            В наличии
          </label>
        </section>

        <button
          className="mt-2 py-1 px-2 border-2 border-text font-bold hover:bg-gray-200"
          onClick={() =>
            setFilters({
              price: [0, 999000],
              storage: [],
              model: [],
              color: [],
              inStock: false,
            })
          }
        >
          Сбросить фильтры
        </button>
      </div>
    </div>
  )
}
