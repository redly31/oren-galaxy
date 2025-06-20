import { Suspense } from "react";
import PhonesList from "../../widgets/phones-list/PhonesList";
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar";
import Loading from "../../shared/components/loading/Loading";
import { ErrorBoundary } from "react-error-boundary";
import ErrorSign from "../../shared/components/error/ErrorSign";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-2">
      <PhonesSidebar/>
      <ErrorBoundary fallback={<ErrorSign/>}>
        <Suspense fallback={<Loading/>}>
          <PhonesList/>
        </Suspense>
      </ErrorBoundary>
      
    </section>
  )
}
