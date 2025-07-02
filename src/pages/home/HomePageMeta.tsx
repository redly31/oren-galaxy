import { Helmet } from "react-helmet-async";

export const HomePageMeta = () => (
  <Helmet>
    <title>OrenGalaxy — Магазин телефонов и электроники</title>
    <meta
      name="description"
      content="OrenGalaxy — ваш надежный магазин современных смартфонов, аксессуаров и электроники в Оренбурге. Выгодные цены, гарантия и доставка."
    />
    <meta property="og:title" content="OrenGalaxy — Магазин телефонов и электроники" />
    <meta
      property="og:description"
      content="Лучший ассортимент смартфонов, аксессуаров и электроники в Оренбурге. Гарантия качества и удобный сервис."
    />
    <meta property="og:type" content="website" />
  </Helmet>
);
