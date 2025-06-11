import { useQuery } from "react-query";
import { getPhones } from "../../entities/phone/PhoneAPI";
import PhoneCard from "../../entities/phone/PhoneCard";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import PurchaseButton from "../../features/purchase-button/PurchaseButton";
import type { Phone } from "../../entities/phone/Phone";
import Loading from "../../shared/components/loading/Loading";
import ErrorSign from "../../shared/components/error/ErrorSign";
import { useAtom } from "jotai";
import { searchAtom } from "../../features/search/searchAtom";

export default function PhonesList() {
  const { data, isLoading, isError } = useQuery<Phone[]>("phones", getPhones);
  const [search, setSearch] = useAtom(searchAtom);

  if (isLoading) return <Loading />;
  if (isError || !Array.isArray(data)) return <ErrorSign />;

  const filteredPhones = data.filter((phone) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return phone.model.toLowerCase().includes(searchLower);
  });

  return (
    <div className="">
      <h1>Каталог</h1>
      {search && (
        <div className="w-full flex justify-between items-center">
          <h3 className="">По запросу "{search}"</h3>
          <button className="cursor-pointer h-8 w-8" onClick={() => setSearch("")}>
            <img src="/close.svg" alt="Отменить поиск" />
          </button>
        </div>
      )}

      {filteredPhones.length === 0 ? (
        <h3>Ничего не найдено :(</h3>
      ) : (
        <div className="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredPhones.map((phone) => (
            <PhoneCard data={phone} key={phone.id}>
              <PurchaseButton />
              <AddToCartButton productId={phone.id}/>
            </PhoneCard>
          ))}
        </div>
      )}
    </div>
  );
}
