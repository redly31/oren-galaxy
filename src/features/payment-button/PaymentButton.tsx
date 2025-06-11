import { useNavigate } from "react-router-dom";
import { paymentAtom } from "./paymentAtom";
import { useSetAtom } from "jotai";

export default function PaymentButton({productId}: {productId: string}) {
  const navigate = useNavigate();
  const setPaymentInfo = useSetAtom(paymentAtom)

  return (
    <button
      onClick={() => {
        navigate("/payment")
        setPaymentInfo(productId)
      }}
      className="px-4 py-2 mt-2 bg-primary border-primary border-4 hover:bg-transparent transition-colors cursor-pointer"
    >
      Купить
    </button>
  );
}
