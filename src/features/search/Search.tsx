import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { searchAtom } from "./searchAtom";
import { useSetAtom } from "jotai";
import { debounce } from "lodash";

interface SearchModalProps {
  onClose: () => void;
}

export const Search: React.FC<SearchModalProps> = ({ onClose }) => {
  const setSearch = useSetAtom(searchAtom);
  const [searchInputValue, setSearchInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Мемоизируем дебаунс, чтобы не пересоздавать его при каждом рендере
  const debouncedSetSearch = useMemo(
    () =>
      debounce((text: string) => {
        setSearch(text);
      }, 500),
    [setSearch]
  );

  // Обработчик изменения инпута
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchInputValue(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  useEffect(() => {
    inputRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      debouncedSetSearch.cancel();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [debouncedSetSearch, onClose]);

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
          ref={inputRef}
          value={searchInputValue}
          onChange={handleChange}
          type="text"
          placeholder="Поиск..."
          className="w-full px-4 py-2 outline-none border-4 border-text"
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </section>
  );
};
