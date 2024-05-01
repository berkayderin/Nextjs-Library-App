'use client'

import { useEffect, useState } from 'react'

import { FaRegTrashAlt } from 'react-icons/fa'
import { LiaEdit } from 'react-icons/lia'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const BooksPage = () => {
	const [data, setData] = useState([])

	const router = useRouter()

	const fetchData = async () => {
		try {
			const response = await axios.get('/api/book')
			setData(response.data.books)
		} catch (error) {
			console.error(response.data.message || 'Bir hata oluştu.')
		}
	}

	const handleDelete = async (id) => {
		try {
			const response = await axios.delete(`/api/book/${id}`)
			console.log(response.data.message)
			toast.success(response.data.message)
			fetchData()
		} catch (error) {
			toast.error(response.data.message)
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
						<td>{book.publishAt ? new Date(book.publishAt).toLocaleDateString('tr-TR') : 'Bilgi Yok'}</td>
						<td>
							<LiaEdit
								className="text-warning mx-2"
								style={{ cursor: 'pointer' }}
								onClick={() => router.push(`/book/${book._id}`)}
							/>
							<FaRegTrashAlt
								className="text-danger"
								style={{ cursor: 'pointer' }}
								onClick={() => handleDelete(book._id)}
							/>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default BooksPage
