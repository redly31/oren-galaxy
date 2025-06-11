import CartPhoneCard from "../../entities/cart/CartPhoneCard";
import { useCartPhones } from "../../entities/cart/useCartPhones";
import PurchaseButton from "../../features/purchase-button/PurchaseButton";
import RemoveFromCartButton from "../../features/remove-from-cart-button/RemoveFromCartButton";
import ErrorSign from "../../shared/components/error/ErrorSign";
import Loading from "../../shared/components/loading/Loading";

export default function CartPage() {
  const { items, isLoading, isError } = useCartPhones();

  if (isLoading) return <Loading />;
  if (isError || !Array.isArray(items)) return <ErrorSign />;

  return (
    <section className="">
      <h1>Корзина</h1>
      <div className="grid justify-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((phone) => (
          <CartPhoneCard data={phone} key={phone.id}>
            <PurchaseButton />
            <RemoveFromCartButton productId={phone.id}/>
          </CartPhoneCard>
        ))}
        {items.length === 0 &&
          <h1 className="flex mt-8">
            Здесь ничего нет😢
          </h1>
        }
      </div>
    </section>
  );
}
