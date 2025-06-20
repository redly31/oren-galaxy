import { Suspense } from "react";
import CartPhonesList from "../../widgets/cart-phones-list/CartPhonesList";
import Loading from "../../shared/components/loading/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorSign from "../../shared/components/error/ErrorSign";

export default function CartPage() {
  return (
    <section className="">
      <h1>Корзина</h1>
      <ErrorBoundary fallback={<ErrorSign />}>
        <Suspense fallback={<Loading />}>
          <CartPhonesList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
}
