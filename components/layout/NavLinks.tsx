import { navLinks } from "@/constants/homePageConstants"
import Link from "next/link"
import React from "react"

export default function NavLinks() {
	return (
		<>
			{navLinks.map(({ title, href }) => (
				<Link href={href} key={href}>
					{title}
				</Link>
			))}
		</>
	)
}
