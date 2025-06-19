import { z } from 'zod';

export const PhoneImageSchema = z.object({
  url: z.string().url("URL изображения должен быть валидным URL."),
  alt: z.string().min(1, "Альтернативный текст изображения не может быть пустым."),
});

const DD_MM_YYYY_REGEX = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;

export const PhoneSchema = z.object({
  id: z.string().min(1, "ID телефона не может быть пустым."),
  model: z.string().min(1, "Модель телефона не может быть пустой."),
  series: z.string().min(1, "Серия телефона не может быть пустой."),
  storage: z.number().int().positive("Объем памяти должен быть положительным целым числом."),
  ram: z.number().int().positive("Объем RAM должен быть положительным целым числом."),
  color: z.string().min(1, "Цвет телефона не может быть пустым."),
  price: z.number().positive("Цена должна быть положительным числом."),
  inStock: z.boolean(),
  releaseDate: z.string()
    .regex(DD_MM_YYYY_REGEX, "Дата выпуска должна быть в формате dd.mm.гггг (например, 17.01.2024).")
    .refine((dateString) => {
      const parts = dateString.split('.');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);

      const date = new Date(year, month, day);
      return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
    }, "Невалидная дата (например, 31.02.2024)."),
  features: z.array(z.string().min(1, "Характеристика не может быть пустой.")),
  warrantyMonths: z.number().int().positive("Гарантия должна быть положительным целым числом.").optional(),
  image: PhoneImageSchema,
});

export type Phone = z.infer<typeof PhoneSchema>;
export type PhoneImage = z.infer<typeof PhoneImageSchema>;