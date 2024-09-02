import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import RootLayout from "@/app/(pages)/layout"

interface PrivateLayoutProps {
	children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps){
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/login');
	}

	return RootLayout({children});
}
