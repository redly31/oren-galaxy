import { Link } from "react-router-dom";
import type { Phone } from "./Phone";
import type { ReactNode } from "react";

type PhoneCardProps = {
  data: Phone;
  children: ReactNode;
};

export default function PhoneCard(props: PhoneCardProps) {
  const { data, children } = props;
  console.log(data);
  return (
    <article className="w-56 mt-8 flex flex-col justify-between">
      <section className="">
        <img
          src="https://img.joomcdn.net/ecbe076f5eacca9811f5f90c2de1a10e4f1aa6b4_original.jpeg"
          alt=""
          className="object-cover h-60 w-full"
        />
        <h3 className="hover:text-primary transition-colors mt-2">
          <Link to="/">
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
