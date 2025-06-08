import React, { useState } from "react";
import { searchAtom } from "./searchAtom";
import { useSetAtom } from "jotai";

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
  const setSearch = useSetAtom(searchAtom);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
      style={{ backgroundColor: "rgba(3, 8, 21, 0.8)" }}
    >
      <div
        className="bg-back max-w-md w-full flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          type="text"
          placeholder="Поиск..."
          className="w-full h-full py-2 px-4 outline-none"
        />
        <button
          onClick={() => {
            onClose();
            setSearch(searchInputValue);
          }}
          className="bg-primary p-2 border-primary border-4 hover:bg-transparent transition-colors cursor-pointer"
        >
          <img className="w-8 h-8" src="/search.svg" alt="Поиск" />
          {/* сюда фокус */}
        </button>
      </div>
    </div>
  );
};
