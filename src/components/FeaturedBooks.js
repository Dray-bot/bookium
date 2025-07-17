'use client'

const featuredBooks = [
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    image: 'https://nashuproar.org/wp-content/uploads/2021/02/the-midnight-library.jpg',
    rating: 4.5
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    image: 'https://images.squarespace-cdn.com/content/v1/5f7225834e8e3e72253bcc35/1621355049952-Z18N9D1JSTES10PCI69K/project+hail+mary.jpg',
    rating: 4.8
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    image: 'https://bookclubchat.com/wp-content/uploads/2019/03/Silent-Patient-Review-Book-Club-Chat.jpg',
    rating: 4.4
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'https://m.media-amazon.com/images/I/61M6KzUbf7L._UF350,350_QL80_.jpg',
    rating: 4.9
  }
]

const FeaturedBooks = () => {
  return (
    <section className="bg-[#f9f9fb] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4c2a85] mb-10 text-center font-display">
          📚 Featured Books
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <div
              key={book.title}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={book.image}
                alt={`Cover of ${book.title}`}
                className="w-full h-60 object-cover"
                loading="lazy"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-500">by {book.author}</p>
                <p className="text-sm font-medium text-yellow-600">
                  ⭐ {book.rating.toFixed(1)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedBooks
