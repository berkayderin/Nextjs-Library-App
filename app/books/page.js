'use client'

import { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'
import axios from 'axios'

const BooksPage = () => {
	const [data, setData] = useState([])

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/book')
			setData(response.data.books)
		} catch (error) {
			console.error(response.data.message || 'Bir hata oluştu.')
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	// createdAt tarihlerine göre sıralama yap
	const sortData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

	return (
		<Table striped bordered hover className="mt-5">
			<thead>
				<tr>
					<th>#</th>
					<th>Kitap Adı</th>
					<th>Yazar</th>
					<th>Yayınevi</th>
					<th>Yayın Yılı</th>
					<th>İşlemler</th>
				</tr>
			</thead>
			<tbody>
				{sortData.map((book, index) => (
					<tr key={book._id}>
						<td>{index + 1}</td>
						<td>{book.name}</td>
						<td>{book.author}</td>
						<td>{book.publisher}</td>
						<td>{book.publishAt}</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default BooksPage
