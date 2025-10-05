import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SignUpButton } from "@clerk/nextjs"
import { CalendarIcon, Circle, MicIcon, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { avatarImages } from "@/constants/homePageConstants"
import Image from "next/image"

export default function Hero() {
	return (
		<section className="min-h-[100vh] h-auto flex items-center  overflow-hidden pt-10 ">
			{/* --------------------------------- GRID BG -------------------------------- */}
			<div className="absolute inset-0 top-14 bg-gradient-to-br from-background via-muted/5 to-primary/5 z-10 h-screen">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20 h-screen"></div>
			</div>
			{/* ------------------------------ GRADIENT ORBS ----------------------------- */}
			<div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl z-20" />
			<div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl z-20" />
			<div className="relative z-30 w-full px-6">
				<div className="grid lg:grid-cols-2 gap-16 items-center grid-cols-1">
					{/* ---------------------------------- LEFT ---------------------------------- */}
					<div className="flex flex-col items-center lg:items-start gap-6">
						<Badge className="">
							<Circle fill="#e78a53" color="#e78a53" /> AI-Powered Dental Assistant
						</Badge>
						<h1>
							Your dental <br />
							<span className="text-primary">questions </span> <br />
							answered <br />
							instantly
						</h1>
						<p className="max-w-xl">
							Chat with our AI dental assistant for instant advice, book smart appointments, and get personalized care
							recommendations. Available 24/7.
						</p>
						{/* ------------------------------- CTA BUTTONS ------------------------------ */}
						<div className="flex flex-col sm:flex-row gap-4">
							<SignUpButton mode="modal">
								<Button>
									<MicIcon />
									Try voice agent
								</Button>
							</SignUpButton>
							<SignUpButton mode="modal">
								<Button variant={"outline"}>
									<CalendarIcon />
									Book appointment
								</Button>
							</SignUpButton>
						</div>
						{/* ----------------------------- AVATAR & STARS ----------------------------- */}
						<div className="flex lg:flex-row flex-col items-center  gap-4">
							{/* --------------------------------- AVATAR --------------------------------- */}
							<div className="flex -space-x-3">
								{avatarImages.map((avatar, index) => (
									<Avatar key={index}>
										<AvatarImage src={avatar} />
										<AvatarFallback>AV</AvatarFallback>
									</Avatar>
								))}
							</div>
							{/* ---------------------------------- STARS --------------------------------- */}
							<div className="flex flex-col gap-0.5">
								<div className="flex items-center gap-2">
									{Array.from({ length: 5 }).map((_, index) => (
										<Star key={index} size={16} color="gold" fill="gold" />
									))}
									<p className="text-foreground text-sm">4.9/5</p>
								</div>
								<p>
									Trusted by <span className="font-bold text-foreground">1,200+ patients</span>
								</p>
							</div>
						</div>
					</div>
					{/* ---------------------------------- RIGHT --------------------------------- */}
					<div className="relative aspect-square">
						<Image
							src={"/hero.webp"}
							alt={"hero"}
							fill
							className="object-contain"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
