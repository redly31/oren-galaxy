interface FilterSectionProps<T extends string | number> {
  title: string
  options: T[]
  selected: T[]
  onToggle: (value: T) => void
  formatLabel?: (value: T) => string
}

export const FilterSection = <T extends string | number>({
  title,
  options,
  selected,
  onToggle,
  formatLabel = (v) => String(v),
}: FilterSectionProps<T>) => {
  return (
    <section>
      <h3 className="font-bold mb-1">{title}</h3>
      <ul className="flex flex-col">
        {options.map((opt) => (
          <li key={String(opt)}>
            <label className="cursor-pointer select-none flex gap-2 items-center">
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => onToggle(opt)}
              />
              {formatLabel(opt)}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
