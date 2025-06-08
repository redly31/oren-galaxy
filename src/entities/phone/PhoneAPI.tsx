import axios from 'axios'
import type { Phone } from './Phone';

export async function getPhones(): Promise<Phone[]> {
  const response = await axios.get<Phone[]>('http://localhost:3000/phones');
  return response.data;
}

export async function getPhone(id: string): Promise<Phone> {
  const response = await axios.get<Phone>(`http://localhost:3000/phones/${id}`);
  return response.data;
}
