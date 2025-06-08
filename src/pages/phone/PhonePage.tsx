import { useParams } from "react-router-dom";
import PhoneDescription from "../../entities/phone/PhoneDescription";
import { useQuery } from "react-query";
import { getPhone } from "../../entities/phone/PhoneAPI";
import PurchaseButton from "../../features/purchase-button/PurchaseButton";
import AddToCartButton from "../../features/add-to-cart-button/AddToCartButton";
import type { Phone } from "../../entities/phone/Phone";
import Loading from "../../shared/components/loading/Loading";
import ErrorSign from "../../shared/components/error/ErrorSign";

export default function PhonePage() {
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useQuery<Phone>(
    ["phones", id],
    () => getPhone(id as string),
  );

  if (isLoading) return <Loading/>;
  if (isError || !data) return <ErrorSign/>;

  return (
    <PhoneDescription data={data}>
      <PurchaseButton />
      <AddToCartButton />
    </PhoneDescription>
  );
}
