import Book from '@/models/Book'
import DbConnect from '@/utils/db'
import { NextResponse } from 'next/server'

export async function POST(req, res) {
	DbConnect()

	const { name, author, publisher, publishAt } = await req.json()

	try {
		const book = await new Book({
			name,
			author,
			publisher,
			publishAt
		}).save()

		return NextResponse.json({ message: 'Kitap başarıyla eklendi.', book })
	} catch (error) {
		return NextResponse.json({ message: 'Kitap eklenirken bir hata oluştu.', status: 500 })
	}
}

export async function GET(req, res) {
	DbConnect()

	try {
		const books = await Book.find()

		return NextResponse.json({ books })
	} catch (error) {
		return NextResponse.json({ message: 'Kitaplar getirilirken bir hata oluştu.', status: 500 })
	}
}
