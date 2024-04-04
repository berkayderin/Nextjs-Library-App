import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Library App'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<ToastContainer />
				<Header />
				<Container>{children}</Container>
			</body>
		</html>
	)
}
