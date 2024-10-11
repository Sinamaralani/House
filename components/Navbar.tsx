import Link from "next/link";
import Image from "next/image";
import UserNav from "@/components/UserNav";
import DesktopLogo from "@/public/airbnb-desktop.png";
import MobileLogo from "@/public/airbnb-mobile.webp";

export default function Navbar() {
  return (
    <nav className="w-full border-b font-IRANSansXV">
      <div className="container mx-auto flex items-center justify-between px-5 py-5 lg:px-10">
        <Link href="/">
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="hidden w-32 lg:block"
          />
          <Image
            src={MobileLogo}
            alt="Mobile Logo"
            className="block w-12 lg:hidden"
          />
        </Link>
        <div className="rounded-full border px-5 py-5">
          <h1>جست و جو</h1>
        </div>
        <UserNav></UserNav>
      </div>
    </nav>
  );
}
