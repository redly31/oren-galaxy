import PhonesList from "../../widgets/phones-list/PhonesList";
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar";

export default function HomePage() {
  return (
    <div className="px-4 flex justify-between">
      <PhonesSidebar/>
      <PhonesList/>
    </div>
  )
}
