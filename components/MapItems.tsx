"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { categoryItems } from "@/lib/categoryItems";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export default function MapFilterItems() {
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="no-scrollbar mt-5 flex w-full items-center justify-between gap-x-10 overflow-x-scroll lg:gap-x-0">
      {categoryItems.map((items) => (
        <Link
          key={items.id}
          href={pathname + "?" + createQueryString("filter", items.name)}
          className={cn(
            search === items.name
              ? "flex-shrink-0 border-b-2 border-black pb-2 transition-colors"
              : "flex-shrink-0 opacity-70 transition-colors",
            "flex flex-col items-center gap-y-3"
          )}
        >
          <div className="relative size-6">
            <Image
              src={items.imageUrl}
              alt="category image"
              width={24}
              height={24}
            ></Image>
          </div>
          <p className="font-IRANSansXV font-medium">{items.title}</p>
        </Link>
      ))}
    </div>
  );
}
