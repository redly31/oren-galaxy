import CartPhoneCard from "../../entities/cart/CartPhoneCard";
import { useCartPhones } from "../../entities/cart/useCartPhones";
import PaymentButton from "../../features/payment-button/PaymentButton";
import RemoveFromCartButton from "../../features/remove-from-cart-button/RemoveFromCartButton";

export default function CartPhonesList() {
  const { items } = useCartPhones();
  return (
    <div className="w-full flex md:justify-start justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((phone) => (
          <CartPhoneCard data={phone} key={phone.id}>
            <PaymentButton productId={phone.id} />
            <RemoveFromCartButton productId={phone.id} />
          </CartPhoneCard>
        ))}
        {items.length === 0 && (
          <h2 className="flex mt-8">Здесь ничего нет😢</h2>
        )}
      </div>
    </div>
  );
}
