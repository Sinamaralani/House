import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";

export default function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-3 rounded-full border px-2 py-2 lg:px-4 lg:py-2">
          <MenuIcon className="size-6 lg:size-5"></MenuIcon>
          <img
            src={
              "data:image/jpeg;base64,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"
            }
            alt="image of the user"
            className="hidden size-8 rounded-full lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[200px] font-IRANSansXV"
      ></DropdownMenuContent>
    </DropdownMenu>
  );
}
