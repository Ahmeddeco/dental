import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { shadcn } from "@clerk/themes"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { ThemeProvider } from "@/components/layout/theme-provider"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Dental - AI Powered Dental Assistant",
	description: "Get instant dental advice through voce calls with our AI assistant. Available 24/7.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: shadcn,
			}}
		>
			<html lang="en" suppressHydrationWarning>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
					<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
						<Header />
						<main className="min-h-dvh pt-14">{children}</main>
						<Footer />
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
