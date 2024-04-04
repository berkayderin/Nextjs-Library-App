'use client'

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import Link from 'next/link'

const Header = () => {
	return (
		<Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">Kütüphane</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link href="/" className="nav-link">
							Anasayfa
						</Link>
						<Link href="/books" className="nav-link">
							Kitaplar
						</Link>
						<Link href="/add" className="nav-link">
							Kitap Ekle
						</Link>
						<Link href="/advice" className="nav-link">
							Kitap Öner
						</Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<Nav.Link href="#link">Giriş Yap</Nav.Link>
						<Nav.Link href="#link">Kayıt Ol</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
