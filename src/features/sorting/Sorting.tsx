import React, { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import type { SortOption } from "./SortOption";
import { sortingAtom } from "./sortingAtom";

interface SortingModalProps {
  onClose: () => void;
}

export const Sorting: React.FC<SortingModalProps> = ({ onClose }) => {
  const [sortBy, setSortBy] = useAtom(sortingAtom);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    selectRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <section
      className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(3,8,21,0.8)]"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-back border-4 border-text px-4 py-2"
      >
        <h3 className="mb-2">Сортировка</h3>
        <select
          ref={selectRef}
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
