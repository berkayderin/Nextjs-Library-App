import Book from '@/models/Book'
import DbConnect from '@/utils/db'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
	DbConnect()

	const { name, author, publisher, publishAt } = req.body

	try {
		const book = await Book.create({
			name,
			author,
			publisher,
			publishAt
		})

		return NextResponse.json({ message: 'Kitap başarıyla eklendi.', book })
	} catch (error) {
		return NextResponse.json({ message: 'Kitap eklenirken bir hata oluştu.', status: 500 })
	}
}
