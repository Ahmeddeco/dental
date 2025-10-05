import { MessageCircleIcon, MessageSquare } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { whatToAsk } from "@/constants/homePageConstants"

export default function WhatToAsk() {
	return (
		<section className="container mx-auto px-6 flex flex-col items-center gap-8 h-auto min-h-[100vh]  ">
			{/* ---------------------------------- TITLE --------------------------------- */}
			<div className="flex flex-col items-center gap-4">
				<Badge>
					<MessageCircleIcon /> AI-Powered Conversations
				</Badge>
				<h2 className="!text-center">
					Ask about <br />
					<span className="text-primary">anything dental</span>
				</h2>
				<p className="text-center max-w-2xl text-pretty">
					From simple questions to complex concerns, our AI delivers expert-level guidance trained on thousands of real
					dental cases
				</p>
			</div>

			{/* ------------------------------ HERO SECTION ------------------------------ */}
			<div className="flex lg:flex-row flex-col-reverse items-center justify-center  gap-8 h-full w-full bg">
				{/* ---------------------------------- cards --------------------------------- */}
				<div className=" h-full w-full lg:w-1/2 flex flex-col gap-4">
					<h6>common quwstions our AI answers : </h6>
					{whatToAsk.map(({ badge1, badge2, paragraph, title }, index) => (
						<Card key={index}>
							<CardContent className="flex flex-col gap-4 justify-start ">
								<div className="flex items-start gap-4">
									<Badge className="rounded-md aspect-square h-12 lg:block hidden">
										<MessageSquare />
									</Badge>
									<div className="flex flex-col gap-4  w-full">
										<Badge className="rounded-md w-full h-12 justify-start">{title}</Badge>
										<div className="rounded-md w-full bg-neutral-800/50 p-4 flex flex-col gap-4">
											<p className=" text-start">{paragraph}</p>
											<div className="flex items-center gap-2">
												<Badge>{badge1}</Badge>
												<Badge>{badge2}</Badge>
											</div>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* ---------------------------------- Image --------------------------------- */}
				<div className="relative w-full lg:w-1/2 aspect-square h-full">
					<Image src={"/confused.webp"} alt={"confused"} fill className="object-contain rounded-2xl" />
				</div>
			</div>
		</section>
	)
}
