import PhonesList from "../../widgets/phones-list/PhonesList";
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-2">
      <PhonesSidebar/>
      <PhonesList/>
    </section>
  )
}
