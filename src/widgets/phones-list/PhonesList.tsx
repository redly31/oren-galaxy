import PhoneCard from "../../entities/phone/PhoneCard";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import PaymentButton from "../../features/payment-button/PaymentButton";
import type { Phone } from "../../entities/phone/Phone";
import { useAtom } from "jotai";
import { searchAtom } from "../../features/search/searchAtom";
import { filteredSortedPhonesAtom } from "../../features/filter/filterAtom";
import Loading from "../../shared/components/loading/Loading";

export default function PhonesList() {
  const [search, setSearch] = useAtom(searchAtom);
  const [phones] = useAtom(filteredSortedPhonesAtom)

 

  return (
    <div className="">
      <h1>Каталог</h1>
      {search && (
        <div className="w-full flex justify-between items-center">
          <h3 className="">По запросу "{search}"</h3>
          <button
            className="cursor-pointer h-8 w-8"
            onClick={() => setSearch("")}
          >
            <img src="/close.svg" alt="Отменить поиск" />
          </button>
        </div>
      )}

      {phones.length === 0 ? (
        <Loading/>
      ) : (
        <div className="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {phones.map((phone: Phone) => (
            <PhoneCard data={phone} key={phone.id}>
              <PaymentButton productId={phone.id} />
              <AddToCartButton productId={phone.id} />
            </PhoneCard>
          ))}
        </div>
      )}
    </div>
  );
}
