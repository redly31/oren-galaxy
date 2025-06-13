import { useAtom } from "jotai";
import { sortingAtom } from "../../features/sorting/sortingAtom";
import type { SortOption } from "../../features/sorting/SortOption";

export default function PhonesSidebar() {
  const [sortBy, setSortBy] = useAtom(sortingAtom);

  return (
    <aside className="w-36 static flex-col gap-1">
      <div className="">
        <h3>Цена</h3>
      </div>
      <h3>Сортировка</h3>
      <select
        className="outline-none bg-back appearance-none p-1 text-center cursor-pointer"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
      >
        <option value="priceAsc">Цена ↑</option>
        <option value="priceDesc">Цена ↓</option>
        <option value="releaseDate">Дата релиза</option>
      </select>
    </aside>
  );
}
