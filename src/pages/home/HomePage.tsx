import PhonesList from "../../widgets/phones-list/PhonesList";
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar";

export default function HomePage() {
  return (
    <div className="px-4 flex gap-8">
      <PhonesSidebar/>
      <PhonesList/>
    </div>
  )
}
