import { useAtom } from 'jotai'
import { cartAtom } from './cartAtom'
import type { Phone } from '../phone/Phone'
import { getPhones } from '../phone/PhoneAPI'
import { useQuery } from 'react-query'

export function useCartPhones(): {
  items: Phone[]
  isLoading: boolean
  isError: boolean
} {
  const [cart] = useAtom(cartAtom)

  const { data: phones = [], isLoading, isError } = useQuery<Phone[]>({
    queryKey: ['phones'],
    queryFn: getPhones,
  })

  const detailedItems = cart
    .map((id) => phones.find((phone) => phone.id === id))
    .filter((phone): phone is Phone => Boolean(phone))

  return { items: detailedItems, isLoading, isError }
}
