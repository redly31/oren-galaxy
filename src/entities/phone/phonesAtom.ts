import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { getPhones } from '../../entities/phone/PhoneAPI';
import type { Phone } from '../../entities/phone/Phone';

export const phonesAtom = atomWithQuery<Phone[]>(() => ({
  queryKey: ['phones'],
  queryFn: getPhones,
  suspense: true,
}));

export const phonesDataAtom = atom((get) => get(phonesAtom).data ?? []);