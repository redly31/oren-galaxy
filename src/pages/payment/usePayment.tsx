import { useAtom, type SetStateAction } from "jotai"
import { cartAtom } from "../../entities/cart/cartAtom"
import { useNavigate } from "react-router-dom"

type SetAtom<Args extends unknown[], Result> = (...args: Args) => Result

type usePaymentProps = {
  paymentInfo: string
  setPaymentInfo: SetAtom<[SetStateAction<string>], void>
}

export const usePayment = (props: usePaymentProps) => {
  const { paymentInfo, setPaymentInfo } = props
  const [cart, setCart] = useAtom(cartAtom)
  const navigate = useNavigate()
  const payment = () => {
    setCart(cart.filter((id) => id !== paymentInfo))
    setPaymentInfo("")
    navigate("/payment/success")
  }

  return { payment }
}
