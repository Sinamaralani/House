import { HomeCards } from "@/components/HomeCards";
import MapFilterItems from "@/components/MapItems";

export default function Page() {
  return (
    <div className="container mx-auto px-5 lg:px-10">
      <MapFilterItems></MapFilterItems>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 mt-10 container mx-auto ">
        <HomeCards></HomeCards>
      </div>
    </div>
  );
}
