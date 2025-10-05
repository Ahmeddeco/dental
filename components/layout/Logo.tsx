import Link from "next/link"
import Image from "next/image"

export default function Logo() {
	return (
		<Link href="/" className="flex items-end gap-2">
			<Image src={"/logo.webp"} alt={"Logo "} width={24} height={24} className="w-auto" />
			<span className="font-black text-2xl leading-none"> Dental</span>
		</Link>
	)
}
