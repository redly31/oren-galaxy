import { useQuery } from "react-query";
import { getPhones } from "../../entities/phone/PhoneAPI";
import PhoneCard from "../../entities/phone/PhoneCard";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import PurchaseButton from "../../features/purchase-button/PurchaseButton";
import type { Phone } from "../../entities/phone/Phone";
import Loading from "../../shared/components/loading/Loading";
import ErrorSign from "../../shared/components/error/ErrorSign";

export default function PhonesList() {
  const { data, isLoading, isError } = useQuery<Phone[]>("phones", getPhones);

  if (isLoading) return <Loading/>;
  if (isError || !Array.isArray(data)) return <ErrorSign/>;

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
