import Link from "next/link";
import React from "react";
import { navLinks } from "@/constants/homePageConstants";

export default function NavLinks() {
  return (
    <>
      {navLinks.map(({ title, href }) => (
        <Link href={href} key={href}>
          {title}
        </Link>
      ))}
    </>
  );
}
