'use client'

import { Button, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useParams } from 'next/navigation'

const EditBook = () => {
	const params = useParams()
	const [book, setBook] = useState({})

	const fetchBookDetail = async () => {
		try {
			const response = await axios.get(`/api/book/${params.id}`)
			console.log(response.data.book)
			setBook(response.data.book)
		} catch (error) {
			console.error(response.data.message || 'Bir hata oluştu.')
		}
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()

	useEffect(() => {
		fetchBookDetail()
	}, [])
	return (
		<Row className="justify-content-center gap-3 mt-5">
			<div className="col-md-6">
				<form>
					<FormGroup>
						<FormLabel>Kitap Adı</FormLabel>
						<FormControl type="text" defaultValue={book.name} {...register('name', { required: true })} />
						{errors.name && <p className="text-danger">Kitap adı zorunludur.</p>}
					</FormGroup>
					<FormGroup>
						<FormLabel>Yazar</FormLabel>
						<FormControl type="text" defaultValue={book.author} {...register('author', { required: true })} />
						{errors.author && <p className="text-danger">Yazar zorunludur.</p>}
					</FormGroup>
					<FormGroup>
						<FormLabel>Yayınevi</FormLabel>
						<FormControl type="text" defaultValue={book.publisher} {...register('publisher', { required: true })} />
						{errors.publisher && <p className="text-danger">Yayınevi zorunludur.</p>}
					</FormGroup>
					<FormGroup>
						<FormLabel>Yayın Tarihi</FormLabel>
						<FormControl type="date" defaultValue={book.publishAt} {...register('publishAt', { required: true })} />
						{errors.publishAt && <p className="text-danger">Yayın tarihi zorunludur.</p>}
					</FormGroup>
					<Button type="submit">Kitabı Güncelle</Button>
				</form>
			</div>
		</Row>
	)
}

export default EditBook
