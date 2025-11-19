import { useState } from "react"
import { Filters } from "../../features/filter/Filters"
import { Search } from "../../features/search/Search"
import { Sorting } from "../../features/sorting/Sorting"

type SidebarView = "search" | "sorting" | "filters" | null

const SIDEBAR_TOOLS = [
  {
    id: "search" as const,
    icon: "/search.svg",
    alt: "Поиск",
    Component: Search,
  },
  {
    id: "sorting" as const,
    icon: "/sorting.svg",
    alt: "Сортировка",
    Component: Sorting,
  },
  {
    id: "filters" as const,
    icon: "/filter.svg",
    alt: "Фильтры",
    Component: Filters,
  },
]

export default function PhonesSidebar() {
  const [activeView, setActiveView] = useState<SidebarView>(null)

  const closeView = () => setActiveView(null)

  return (
    <aside className="flex flex-col gap-2">
      <section className="flex gap-2">
        {SIDEBAR_TOOLS.map((tool) => (
          <button
            key={tool.id}
            className="cursor-pointer"
            onClick={() => setActiveView(tool.id)}
          >
            <img className="w-8 h-8" src={tool.icon} alt={tool.alt} />
          </button>
        ))}
      </section>

      {activeView === "sorting" && <Sorting onClose={closeView} />}
      {activeView === "search" && <Search onClose={closeView} />}
      {activeView === "filters" && <Filters onClose={closeView} />}
    </aside>
  )
}
