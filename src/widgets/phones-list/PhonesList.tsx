import { useQuery } from "react-query";
import { getPhones } from "../../entities/phone/PhoneAPI";
import PhoneCard from "../../entities/phone/PhoneCard";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import PurchaseButton from "../../features/purchase-button/PurchaseButton";
import type { Phone } from "../../entities/phone/Phone";

export default function PhonesList() {
  const { data, isLoading, isError } = useQuery<Phone[]>("phones", getPhones);

  if (isLoading) return <h1>Загрузка...</h1>;
  if (isError || !Array.isArray(data)) return <h1>Ошибка загрузки</h1>;

  return (
    <div className="">
      <h1>Каталог</h1>
      <div className="grid grid-cols-3 gap-2">
        {data.map((phone: Phone) => (
          <PhoneCard data={phone} key={phone.id}>
            <PurchaseButton />
            <AddToCartButton />
          </PhoneCard>
        ))}
      </div>
    </div>
  );
}
