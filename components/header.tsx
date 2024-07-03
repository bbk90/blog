import Link from "next/link";
import NavLinks from "./nav-links";

export default function Header() {
  return (
    <header className="border-b p-4">
      <div className="flex justify-between items-center">
        <div className="size-8 bg-black text-white flex justify-center items-center rounded-lg">
          B
        </div>
        <NavLinks />
      </div>
    </header>
  );
}
