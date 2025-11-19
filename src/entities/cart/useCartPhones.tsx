import { useAtom } from "jotai"
import { cartAtom } from "./cartAtom"
import { useQuery } from "react-query"
import { getPhones } from "../../shared/api/phone"
import type { Phone } from "../../shared/model/Phone"

export function useCartPhones(): {
  items: Phone[]
} {
  const [cart] = useAtom(cartAtom)

  const { data: phones = [] } = useQuery<Phone[]>({
    queryKey: ["phones"],
    queryFn: getPhones,
    suspense: true,
  })

  const detailedItems = cart
    .map((id) => phones.find((phone) => phone.id === id))
    .filter((phone): phone is Phone => Boolean(phone))

  return { items: detailedItems }
}
