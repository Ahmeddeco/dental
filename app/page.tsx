import { Button } from "@/components/ui/button"
import { SignedOut, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs"

export default function HomePage() {
	return (
		<div className="">
			<h1> Welcome to Homepage!</h1>
			<SignUpButton mode="modal" />
			<SignOutButton />
			<UserButton />
		</div>
	)
}
