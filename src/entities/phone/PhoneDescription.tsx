import type { ReactNode } from "react";
import type { Phone } from "./Phone";

type PhoneDescriptionProps = {
  data: Phone;
  children: ReactNode;
};

export default function PhoneDescription(props: PhoneDescriptionProps) {
  const { data, children } = props;

  return (
    <article className="px-4 mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold flex">
          Смартфон Samsung {data.model} {data.ram}/{data.storage} ГБ{" "}
          {data.color}
        </h1>
      </header>
      <section className="flex gap-8 flex-col items-center md:items-start md:flex-row">
        <section className="sm:w-2/3 md:w-1/2">
          <img
            className="object-cover md:h-full"
            src={data.image?.url}
            alt={data.image?.alt}
          />
          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between mt-4">
              <h3
                itemProp="price"
                content={`${data.price}`}
                className="font-bold !text-2xl"
              >
                {data.price} ₽
              </h3>
              <span className="bg-text text-back px-3 py-1 rounded-full text-sm">
                {data.inStock ? "В наличии" : "Не в наличии"}
              </span>
            </div>

            <div className="flex flex-col">{children}</div>
          </section>
        </section>
        <section className="w-full sm:w-2/3 md:w-1/2">
          <h2>Характеристики</h2>
          <ul className="space-y-3 mt-2">
            <li className="flex justify-between">
              <span className="">Модель</span>
              <span>Samsung {data.model}</span>
            </li>
            <li className="flex justify-between">
              <span className="">Память</span>
              <span>
                {data.ram} ГБ RAM / {data.storage} ГБ ROM
              </span>
            </li>
            <li className="flex justify-between">
              <span className="">Цвет</span>
              <span>{data.color}</span>
            </li>
            <li className="flex justify-between">
              <span className="">Дата выхода</span>
              <span>{data.releaseDate}</span>
            </li>
            <li className="flex justify-between">
              <span className="">Гарантия</span>
              <span>{data.warrantyMonths} мес.</span>
            </li>
            <li className="flex flex-col">
              <span className="mb-1">Особенности</span>
              <div className="flex flex-wrap gap-2">
                {data.features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-text text-back px-3 py-1 mt-2 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
}
