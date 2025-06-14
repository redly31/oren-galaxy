import { useAtom } from "jotai";
import {
  priceFilterAtom,
  storageFilterAtom,
  modelFilterAtom,
  colorFilterAtom,
  inStockFilterAtom,
  storageOptionsAtom,
  modelOptionsAtom,
  colorOptionsAtom,
} from "../../features/filter/filterAtom";

interface SearchModalProps {
  onClose: () => void;
}

export const Filters: React.FC<SearchModalProps> = ({ onClose }) => {
  const [price, setPrice] = useAtom(priceFilterAtom);
  const [storages, toggleSto] = useAtom(storageFilterAtom);
  const [models, toggleModel] = useAtom(modelFilterAtom);
  const [colors, toggleColor] = useAtom(colorFilterAtom);
  const [inStock, setInStock] = useAtom(inStockFilterAtom);
  const storageOptions = useAtom(storageOptionsAtom)[0];
  const modelOptions = useAtom(modelOptionsAtom)[0];
  const colorOptions = useAtom(colorOptionsAtom)[0];

  return (
    <section
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
      style={{ backgroundColor: "rgba(3, 8, 21, 0.8)" }}
    >
      <div
        className="bg-back flex flex-col gap-2 px-4 py-2 border-4 border-text "
        onClick={(e) => e.stopPropagation()}
      >
        <section>
          <h3>Цена</h3>
          <div className="flex gap-2 mt-1 flex-col">
            <input
              className="w-36 px-2 py-1 border-4 border-text outline-none"
              type="number"
              placeholder={price[0].toString()}
              onChange={(e) => setPrice([+e.target.value, price[1]])}
            />
            <input
              className="w-36 px-2 py-1 border-4 border-text outline-none"
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
                <label>
                  <input
                    type="checkbox"
                    checked={storages.includes(s)}
                    onChange={() => {
                      const next = storages.includes(s)
                        ? storages.filter((x) => x !== s)
                        : [...storages, s];
                      toggleSto(next);
                    }}
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
                <label>
                  <input
                    type="checkbox"
                    checked={models.includes(s)}
                    onChange={() => {
                      const next = models.includes(s)
                        ? models.filter((x) => x !== s)
                        : [...models, s];
                      toggleModel(next);
                    }}
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
                <label>
                  <input
                    type="checkbox"
                    checked={colors.includes(s)}
                    onChange={() => {
                      const next = colors.includes(s)
                        ? colors.filter((x) => x !== s)
                        : [...colors, s];
                      toggleColor(next);
                    }}
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
              <label>
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
