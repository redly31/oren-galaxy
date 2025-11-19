import { atom } from "jotai"
import { atomWithQuery } from "jotai-tanstack-query"
import { getPhones } from "../../../shared/api/phone"
import type { Phone } from "../../../shared/model/Phone"

export const phonesAtom = atomWithQuery<Phone[]>(() => ({
  queryKey: ["phones"],
  queryFn: getPhones,
  suspense: true,
}))

export const phonesDataAtom = atom((get) => get(phonesAtom).data ?? [])
