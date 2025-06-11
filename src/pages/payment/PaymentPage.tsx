import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { paymentAtom } from "../../features/payment-button/paymentAtom";
import type { Phone } from "../../entities/phone/Phone";
import { useQuery } from "react-query";
import Loading from "../../shared/components/loading/Loading";
import ErrorSign from "../../shared/components/error/ErrorSign";
import { getPhone } from "../../entities/phone/PhoneAPI";

export default function PaymentPage() {
  const [paymentInfo] = useAtom(paymentAtom)

  const { data: phone, isError, isLoading } = useQuery<Phone>(
    ["phones", paymentInfo],
    () => getPhone(paymentInfo as string),
  );

  if (isLoading) return <Loading/>;
  if (isError || !phone || !paymentInfo) return <ErrorSign/>;
  
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-xs">
      <header>
        <h1>Оплата товара</h1>
        <img
          className="pointer-events-none mt-2"
          src="/mock-qr.svg"
          alt="QR-Код"
        />
      </header>
      <section className="mt-4">
        <h2 className="">{phone.price} ₽</h2>
        <h3>Смартфон Samsung {phone.model} {phone.ram}/{phone.storage} ГБ{" "}
          {phone.color}</h3>
      </section>
      <footer>
        <Link
          to="success"
          className="block text-center px-4 py-2 mt-2 w-full bg-primary border-primary border-4 hover:bg-transparent transition-colors cursor-pointer"
        >
          Оплата
        </Link>
      </footer>
    </div>
  );
}
