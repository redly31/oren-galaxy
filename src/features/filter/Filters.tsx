import React, { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import {
  priceFilterAtom,
  storageFilterAtom,
  modelFilterAtom,
  colorFilterAtom,
  inStockFilterAtom,
} from "./filterAtoms";
import {
  storageOptionsAtom,
  modelOptionsAtom,
  colorOptionsAtom,
} from "./filterOptionsAtoms";

interface FiltersProps {
  onClose: () => void;
}

export const Filters: React.FC<FiltersProps> = ({ onClose }) => {
  const [price, setPrice] = useAtom(priceFilterAtom);
  const [storages, setStorages] = useAtom(storageFilterAtom);
  const [models, setModels] = useAtom(modelFilterAtom);
  const [colors, setColors] = useAtom(colorFilterAtom);
  const [inStock, setInStock] = useAtom(inStockFilterAtom);

  const storageOptions = useAtom(storageOptionsAtom)[0];
  const modelOptions = useAtom(modelOptionsAtom)[0];
  const colorOptions = useAtom(colorOptionsAtom)[0];

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

function toggleItem<T>(
  list: T[],
  setList: React.Dispatch<React.SetStateAction<T[]>>,
  item: T
) {
  setList(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
}


  return (
    <section
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
      style={{ backgroundColor: "rgba(3, 8, 21, 0.8)" }}
    >
      <div
        className="bg-back flex flex-col w-96 gap-4 px-4 py-3 border-4 border-text"
        onClick={(e) => e.stopPropagation()}
      >
        <section>
          <h3>Цена</h3>
          <div className="flex flex-col gap-2 mt-1">
            <input
              ref={firstInputRef}
              className="px-2 py-1 border-4 border-text outline-none"
              type="number"
              placeholder={price[0].toString()}
              onChange={(e) => setPrice([+e.target.value, price[1]])}
            />
            <input
              className="px-2 py-1 border-4 border-text outline-none"
              type="number"
              placeholder={price[1].toString()}
              onChange={(e) => setPrice([price[0], +e.target.value])}
            />
          </div>
        </section>

        <section>
          <h3>Память</h3>
          <ul className="flex flex-col">
            {storageOptions.map((s) => (
              <li key={s}>
                <label className="cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={storages.includes(s)}
                    onChange={() => toggleItem(storages, setStorages, s)}
                  />
                  {s} ГБ
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Модели</h3>
          <ul className="flex flex-col">
            {modelOptions.map((s) => (
              <li key={s}>
                <label className="cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={models.includes(s)}
                    onChange={() => toggleItem(models, setModels, s)}
                  />
                  {s}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Цвета</h3>
          <ul className="flex flex-col">
            {colorOptions.map((s) => (
              <li key={s}>
                <label className="cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={colors.includes(s)}
                    onChange={() => toggleItem(colors, setColors, s)}
                  />
                  {s}
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Наличие</h3>
          <ul>
            <li>
              <label className="cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={inStock}
                  onChange={(e) => setInStock(e.target.checked)}
                />
                В наличии
              </label>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};
