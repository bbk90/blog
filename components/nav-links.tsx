"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { title: "Home", path: "/" },
  { title: "Posts", path: "/posts" },
  { title: "Create post", path: "/create-post" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-4">
        {NAV_ITEMS.map((navItem) => (
          <li key={navItem.title}>
            <Link
              className={`${
                pathname === navItem.path ? "text-zinc-900" : "text-zinc-400"
              }`}
              href={navItem.path}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
