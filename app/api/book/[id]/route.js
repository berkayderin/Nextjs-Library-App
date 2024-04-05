import Book from '@/models/Book'
import DbConnect from '@/utils/db'
import { NextResponse } from 'next/server'

// kitap silme
export async function DELETE(req, { params }) {
	DbConnect()

	const { id } = params

	try {
		const book = await Book.findByIdAndDelete(id)

		return NextResponse.json({ message: 'Kitap başarıyla silindi.', book })
	} catch (error) {
		return NextResponse.json({ message: 'Kitap silinirken bir hata oluştu.', status: 500 })
	}
}

// kitap güncelleme
export async function PUT(req, { params, body }) {
	DbConnect()

	const { id } = params
	const { name, author, publisher, publishAt } = body

	try {
		const book = await Book.findByIdAndUpdate(id, { name, author, publisher, publishAt }, { new: true })

		return NextResponse.json({ message: 'Kitap başarıyla güncellendi.', book })
	} catch (error) {
		return NextResponse.json({ message: 'Kitap güncellenirken bir hata oluştu.', status: 500 })
	}
}

// kitap detayı
export async function GET(req, { params }) {
	DbConnect()

	const { id } = params

	try {
		const book = await Book.findById(id)
		return NextResponse.json({ book })
	} catch (error) {
		return NextResponse.json({ message: 'Kitap bulunamadı.', status: 404 })
	}
}
