import axios from 'axios';
import { z } from 'zod';
import { PhoneSchema } from './PhoneSchema';
import type { Phone } from './Phone';


const API_BASE_URL = 'http://localhost:3000';

export async function getPhones(): Promise<Phone[]> {
  const response = await axios.get<unknown[]>(`${API_BASE_URL}/phones`);
  try {
    return z.array(PhoneSchema).parse(response.data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Ошибка валидации данных при получении списка телефонов:', error.issues);
      throw new Error('Получены некорректные данные телефонов от API.');
    }
    throw error;
  }
}

export async function getPhone(id: string): Promise<Phone> {
  const response = await axios.get<unknown>(`${API_BASE_URL}/phones/${id}`);
  try {
    return PhoneSchema.parse(response.data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`Ошибка валидации данных при получении телефона ${id}:`, error.issues);
      throw new Error(`Получены некорректные данные для телефона с ID ${id} от API.`);
    }
    throw error;
  }
}