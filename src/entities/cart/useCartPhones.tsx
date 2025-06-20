import { useAtom } from 'jotai'
import { cartAtom } from './cartAtom'
import type { Phone } from '../phone/Phone'
import { getPhones } from '../phone/PhoneAPI'
import { useQuery } from 'react-query'

export function useCartPhones(): {
  items: Phone[]
} {
  const [cart] = useAtom(cartAtom)

  const { data: phones = [] } = useQuery<Phone[]>({
    queryKey: ['phones'],
    queryFn: getPhones,
    suspense: true,
  })

  const detailedItems = cart
    .map((id) => phones.find((phone) => phone.id === id))
    .filter((phone): phone is Phone => Boolean(phone))

  return { items: detailedItems }
}
