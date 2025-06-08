import PhonesList from "../../widgets/phones-list/PhonesList";
import PhonesSidebar from "../../widgets/phones-sidebar/PhonesSidebar";

export default function HomePage() {
  return (
    <div className="px-4 flex justify-between">
      <div className="w-2/10">
        <PhonesSidebar/>
      </div>
      <div className="w-8/10">
        <PhonesList/>
      </div>
    </div>
  )
}
