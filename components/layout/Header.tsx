import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

export default function Header() {
	return (
		<header className="fixed inset-0 z-50 px-6 border-b h-14 bg-background/80 backdrop-blur-md ">
			<div className="flex items-center justify-between container mx-auto h-full">
				<Logo />
				{/* Desktop navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<NavLinks />
				</nav>
				{/* buttons */}
				<div className="flex items-center gap-4">
					<Button variant={"ghost"} asChild size={"sm"}>
						<SignInButton mode="modal" />
					</Button>
					<Button asChild size={"sm"}>
						<SignUpButton mode="modal" />
					</Button>
					<UserButton />
				</div>
			</div>
		</header>
	)
}
