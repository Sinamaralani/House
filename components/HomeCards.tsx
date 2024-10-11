import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";
import { Button } from "./ui/button";

export async function HomeCards() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: houses } = await supabase
    .from("Houses")
    .select("id,name,price,image");

  return (
    <>
      {houses?.map((item) => (
        <div
          key={item.id}
          className="w-80 h-80 rounded-lg font-IRANSansXV border-none"
        >
          <div className=" h-72">
            <Image
              src={item.image}
              alt="image"
              width={320}
              height={320}
              className="rounded-lg h-full object-cover "
            />
            {/* <Heart className="absolute text-black bg-gray-300 rounded-md p-0.5 hover:text-red-500 mr-5 "></Heart> */}
          </div>
          <div className="flex items-center justify-between">
            <div className="mt-3 flex flex-col text-right p-0 items-start">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-sm">هر شب {item.price} تومان</p>
            </div>
            <Button className="mt-3">مشاهده</Button>
          </div>
        </div>
      ))}
    </>
  );
}
