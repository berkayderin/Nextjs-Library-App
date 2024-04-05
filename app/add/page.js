'use client'

import { Button, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

const AddPage = () => {
	const handleSave = async (data) => {
		const body = JSON.stringify(data)
		try {
			const response = await axios.post('/api/book', body, {
				headers: { 'Content-Type': 'application/json' }
			})

			toast.success(response.data.message)
		} catch (error) {
			toast.error(error.response.data.message || 'Bir hata oluştu.')
		}
	}

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()
	return (
		<Row className="justify-content-center gap-3 mt-5">
			<FormGroup>
				<FormLabel>Kitap Adı</FormLabel>
				<FormControl type="text" placeholder="Kitap Adı" {...register('name', { required: true })} />
			</FormGroup>
			<FormGroup>
				<FormLabel>Yazar</FormLabel>
				<FormControl type="text" placeholder="Yazar" {...register('author', { required: true })} />
			</FormGroup>
			<FormGroup>
				<FormLabel>Yayınevi</FormLabel>
				<FormControl type="text" placeholder="Yayınevi" {...register('publisher', { required: true })} />
			</FormGroup>
			<FormGroup>
				<FormLabel>Yayın Yılı</FormLabel>
				<FormControl type="number" placeholder="Yayın Yılı" {...register('publishAt', { required: true })} />
			</FormGroup>
			<FormGroup>
				<Button variant="dark" onClick={handleSubmit(handleSave)}>
					Kaydet
				</Button>
			</FormGroup>
		</Row>
	)
}

export default AddPage
