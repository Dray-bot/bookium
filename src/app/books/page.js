'use client'

import { useState } from 'react'
import { books } from '@/lib/booksData'
import { useCartStore } from '@/store/cart-store'

const BooksPage = () => {
  const [query, setQuery] = useState('')
  const addToCart = useCartStore((state) => state.addToCart)

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="bg-[#faf7ff] min-h-screen pt-28 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-8 text-center">
          📚 All Books
        </h2>

        {/* Search Input */}
        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-1/2 px-5 py-3 border border-purple-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-purple-400 text-black font-medium transition duration-300"
          />
        </div>

        {filteredBooks.length === 0 ? (
          <p className="text-center text-xl text-red-500 font-semibold">
            😔 No books match your search.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-60 object-cover rounded-md group-hover:scale-105 transition duration-300"
                />
                <h3 className="mt-4 font-bold text-lg text-purple-800 group-hover:text-purple-600 transition">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 italic">{book.author}</p>
                <p className="text-purple-600 font-bold mt-2 text-md">
                  ₦{book.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(book)}
                  className="mt-3 w-full py-2 px-4 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BooksPage
