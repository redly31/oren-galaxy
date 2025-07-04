import { Link } from "react-router-dom";
import type { Phone } from "./Phone";
import type { ReactNode } from "react";

type PhoneCardProps = {
  data: Phone;
  children: ReactNode;
};

export default function PhoneCard(props: PhoneCardProps) {
  const { data, children } = props;
  return (
    <article className="mt-4 flex flex-col justify-between max-w-xs">
      <section className="flex flex-col items-center">
        <img
          src={data.image.url}
          alt={data.image.alt}
          className="h-40 min-[450px]:h-60 border-4 border-white"
        />
        <h3 className="hover:text-primary transition-colors mt-2">
          <Link to={`/phones/${data.id}`}>
            Смартфон Samsung {data.model} {data.ram}/{data.storage} ГБ{" "}
            {data.color}
          </Link>
        </h3>
      </section>
      <section className="flex flex-col">
        <h3 itemProp="price" content={data.price.toString()} className="mt-2 font-bold !text-2xl">
          {data.price} ₽
        </h3>
        <div className="flex flex-col">{children}</div>
      </section>
    </article>
  );
}
