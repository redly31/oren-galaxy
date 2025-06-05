import { useQuery } from "react-query";
import getPhone from "../../entities/phone/PhoneAPI";
import PhoneCard from "../../entities/phone/PhoneCard";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import PurchaseButton from "../../features/purchase-button/PurchaseButton";
import type { Phone } from "../../entities/phone/Phone";

export default function PhonesList() {
  const { data } = useQuery("phones", getPhone);
  if (!data) {
    return <h1>Загрузка</h1>;
  }
  console.log(data.data);
  return (
    <div className="">
      <h1>Каталог</h1>
      <div className="grid grid-cols-3 gap-2">
        {data.data.map((phone: Phone) => (
          <PhoneCard data={phone} key={phone.id}>
            <PurchaseButton />
            <AddToCartButton />
          </PhoneCard>
        ))}
      </div>
    </div>
  );
}
