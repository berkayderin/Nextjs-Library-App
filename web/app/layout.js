import './globals.css'

import { Container } from 'react-bootstrap'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Library App'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Container>{children}</Container>
			</body>
		</html>
	)
}
