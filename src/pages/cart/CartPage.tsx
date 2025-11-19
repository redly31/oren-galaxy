import { Suspense } from "react"
import CartPhonesList from "../../widgets/cart-phones-list/CartPhonesList"
import Loading from "../../shared/components/loading/Loading"

export default function CartPage() {
  return (
    <section className="">
      <h1>Корзина</h1>
      <Suspense fallback={<Loading />}>
        <CartPhonesList />
      </Suspense>
    </section>
  )
}
