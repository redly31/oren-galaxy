import PhonesList from "../../widgets/phones-list/PhonesList";
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar";

export default function HomePage() {
  return (
    <section className="px-4 flex gap-4 justify-between">
      <div className="w-2/10">
        <PhonesSidebar/>
      </div>
      <div className="w-8/10">
        <PhonesList/>
      </div>
    </section>
  )
}
