import React from "react";
import { useAtom } from "jotai";
import type { SortOption } from "./SortOption";
import { sortingAtom } from "./sortingAtom";

interface SearchModalProps {
  onClose: () => void;
}

export const Sorting: React.FC<SearchModalProps> = ({ onClose }) => {
  const [sortBy, setSortBy] = useAtom(sortingAtom);

  return (
    <section
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(3, 8, 21, 0.8)" }}
      onClick={() => {
        onClose();
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-back border-4 border-text px-4 py-2"
      >
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
      </div>
    </section>
  );
};
