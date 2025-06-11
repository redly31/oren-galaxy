import { useSetAtom } from "jotai";
import { Link } from "react-router-dom";
import { paymentAtom } from "../../features/payment-button/paymentAtom";
import { useEffect } from "react";

export default function SuccessPaymentPage() {
  const setPaymentInfo = useSetAtom(paymentAtom)
  useEffect(() => {
    setPaymentInfo('');
  });

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center">
      <h1>Оплата прошла успешно✅</h1>
      <Link
        to="/"
        className="px-4 py-2 bg-primary border-primary border-4 hover:bg-transparent transition-colors cursor-pointer"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
