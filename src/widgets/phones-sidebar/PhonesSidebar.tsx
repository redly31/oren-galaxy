import { useState } from "react";
import { Filters } from "../../features/filter/filters";
import { Search } from "../../features/search/Search";
import { Sorting } from "../../features/sorting/Sorting";

export default function PhonesSidebar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  const openSorting = () => setIsSortingOpen(true);
  const closeSorting = () => setIsSortingOpen(false);

  const openFilters = () => setIsFiltersOpen(true);
  const closeFilters = () => setIsFiltersOpen(false);

  return (
    <aside className="flex flex-col gap-2">
      <section className="flex gap-2">
        <button className="cursor-pointer" onClick={openSearch}>
          <img className="w-8 h-8" src="/search.svg" alt="Поиск" />
        </button>
        <button className="cursor-pointer" onClick={openSorting}>
          <img className="w-8 h-8" src="/sorting.svg" alt="Сортировка" />
        </button>
        <button className="cursor-pointer" onClick={openFilters}>
          <img className="w-8 h-8" src="/filter.svg" alt="Сортировка" />
        </button>
      </section>

      {isSortingOpen && <Sorting onClose={closeSorting} />}
      {isSearchOpen && <Search onClose={closeSearch} />}
      {isFiltersOpen && <Filters onClose={closeFilters} />}
    </aside>
  );
}
