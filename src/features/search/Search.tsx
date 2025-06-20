import React, { useState } from "react";
import { searchAtom } from "./searchAtom";
import { useSetAtom } from "jotai";
import { debounce } from 'lodash';

interface SearchModalProps {
  onClose: () => void;
}

export const Search: React.FC<SearchModalProps> = ({ onClose }) => {
  const setSearch = useSetAtom(searchAtom);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const debouncedSetSearch = debounce((text: string) => setSearch(text), 500);
  return (
    <section
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
      style={{ backgroundColor: "rgba(3, 8, 21, 0.8)" }}
    >
      <div
        className="bg-back max-w-md w-full flex items-stretch"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          value={searchInputValue}
          onChange={(e) => {
            const newValue = e.target.value;
            setSearchInputValue(newValue);
            debouncedSetSearch(newValue);
          }}
          type="text"
          placeholder="Поиск..."
          className="w-full px-4 py-2 outline-none border-4 border-text"
        />
      </div>
    </section>
  );
};