import PhoneCard from "../../entities/phone/PhoneCard";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import PaymentButton from "../../features/payment-button/PaymentButton";
import type { Phone } from "../../entities/phone/Phone";
import { useAtom } from "jotai";
import { searchAtom } from "../../features/search/searchAtom";
import Loading from "../../shared/components/loading/Loading";
import { filteredSortedPhonesAtom } from "../../features/filter/filteredSortedPhonesAtom";;

export default function PhonesList() {
  const [search, setSearch] = useAtom(searchAtom);
  const [phones] = useAtom(filteredSortedPhonesAtom);

  if (!search && phones.length === 0) {
    return <Loading />;
  }

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
      <div className="w-full flex md:justify-start justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {phones.map((phone: Phone) => (
            <PhoneCard data={phone} key={phone.id}>
              <PaymentButton productId={phone.id} />
              <AddToCartButton productId={phone.id} />
            </PhoneCard>
          ))}
        </div>
      </div>
    </div>
  );
}
