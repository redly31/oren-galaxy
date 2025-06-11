interface PhoneImage {
  url: string;
  alt: string;
}

export interface CartPhone {
  id: string;
  model: string;
  series: string;
  storage: number;
  ram: number;
  color: string;
  price: number;
  inStock: boolean;
  releaseDate: string;
  features: string[];
  warrantyMonths?: number;
  image: PhoneImage;
}
