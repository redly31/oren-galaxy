interface PhoneImage {
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface Phone {
  id: string;
  model: string;
  series: string;
  storage: number;
  ram: number;
  color: string;
  price: number;
  inStock: boolean;
  releaseDate: Date;
  features: string[];
  warrantyMonths?: number;
  images: PhoneImage[];
}
