import { useQuery } from "react-query"
import { getPhone } from "../../../shared/api/phone"
import type { Phone } from "../../../shared/model/Phone"

export function usePhones(id: string) {
  const {
    data: phone,
    isError,
    isLoading,
  } = useQuery<Phone>({
    queryKey: ["phone", id],
    queryFn: () => getPhone(id as string),
    suspense: true,
  })

  return { phone, isError, isLoading }
}
