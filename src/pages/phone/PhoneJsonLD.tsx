import { Helmet } from "react-helmet-async";
import type { Phone } from "../../entities/phone/PhoneSchema";

type PhoneJsonLD = {
  data: Phone
}

export const PhoneJsonLD = (props: PhoneJsonLD) => {
  const { data: phone } = props
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: phone.model,
    image: phone.image.url,
    description: `${phone.model} ${phone.storage}GB с ${phone.ram}GB RAM. ${phone.color}`,
    sku: phone.id,
    brand: {
      "@type": "Brand",
      name: phone.series,
    },
    offers: {
      "@type": "Offer",
      url: window.location.href,
      priceCurrency: "RUB",
      price: phone.price.toString(),
      availability: phone.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};
