import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"
import RootLayout from "@/app/(pages)/login/layout"

interface PrivateLayoutProps {
	children: ReactNode;
}

export default async function PrivateLayoutLogin({ children }: PrivateLayoutProps){
	const session = await getServerSession(authOptions);

	if (session) {
		redirect('/transfers');
	}

	return RootLayout({children});
}
