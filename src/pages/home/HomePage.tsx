import { Suspense } from "react"
import PhonesList from "../../widgets/phones-list/PhonesList"
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar"
import Loading from "../../shared/components/loading/Loading"
import { HomePageMeta } from "./HomePageMeta"

export default function HomePage() {
  return (
    <section className="flex flex-col gap-2">
      <HomePageMeta />
      <PhonesSidebar />
      <Suspense fallback={<Loading />}>
        <PhonesList />
      </Suspense>
    </section>
  )
}
