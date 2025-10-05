import { SignUpButton } from "@clerk/nextjs"
import { ArrowRightIcon, ZapIcon } from "lucide-react"
import Image from "next/image"
import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { howItWorksCards } from "@/constants/homePageConstants"

export default function HowItWorks() {
	return (
		<section className="flex flex-col items-center gap-8 h-auto">
			{/* ---------------------------------- TITLE --------------------------------- */}
			<div className="flex flex-col items-center gap-4">
				<Badge>
					<ZapIcon /> simple process
				</Badge>
				<h2 className="!text-center">
					three steps to <br />
					<span className="text-primary"> better dental health</span>
				</h2>
				<p className="text-center max-w-2xl text-pretty">
					Our streamlined process makes dental care accessible. convenient, and stress-free for everyone
				</p>
			</div>

			{/* ---------------------------------- CARDS --------------------------------- */}
			<div className="flex items-center justify-center flex-wrap gap-8">
				{howItWorksCards.map(({ badge1, badge2, image, paragraph, title, number }) => (
					<Card key={number} className="max-w-sm w-auto relative">
						<div className="rounded-full size-6 bg-primary absolute -top-3 left-6 flex items-center justify-center text-background font-semibold">
							{number}
						</div>
						<CardContent className="flex flex-col items-center gap-4">
							<div className="relative size-16 aspect-square bg-primary/10 rounded-2xl">
								<Image src={image} alt={title} fill className="object-cover rounded-2xl p-4" />{" "}
							</div>
							<h6 className="text-center">{title}</h6>
							<p className="text-center text-pretty">{paragraph}</p>
							<div className="flex items-center gap-4">
								<Badge>{badge1}</Badge>
								<Badge>{badge2}</Badge>
							</div>
						</CardContent>
					</Card>
				))}
				{/* ----------------------------------- CTA ---------------------------------- */}
			</div>
			<div className="text-center mt-16">
				<SignUpButton mode="modal">
					<Button size="lg">
						<ArrowRightIcon className="mr-2 size-5" />
						Get started now
					</Button>
				</SignUpButton>
			</div>
		</section>
	)
}
