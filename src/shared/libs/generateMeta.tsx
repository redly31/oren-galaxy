import type { Phone } from "../../entities/phone/Phone";

export const generateMeta = (phone: Phone) => {
  const title = `${phone.model} ${phone.storage}GB — Купить в нашем магазине`;
  const description = `${phone.model} ${phone.storage}GB с ${phone.ram}GB RAM. ${phone.color}. Лучшая цена — ${phone.price} ₽.` +
    (phone.warrantyMonths ? ` Гарантия ${phone.warrantyMonths} мес.` : "") +
    ` ${phone.inStock ? "Есть в наличии — доставка прямо сейчас!" : "Нет в наличии — уточняйте дату поступления."}`;

  return {
    title,
    description,
    image: phone.image.url,
  };
};
