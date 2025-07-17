'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const authors = [
  {
    name: 'Chimamanda Adichie',
    genre: 'Fiction, Feminism',
    image: 'https://i0.wp.com/entrepreneurs.ng/wp-content/uploads/2019/07/cropped-Chima-1.jpg',
  },
  {
    name: 'Stephen King',
    genre: 'Horror, Thriller',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04EsdMcSy60-LRf2b8pRuhe4-qCSxzu591A&s',
  },
  {
    name: 'Colleen Hoover',
    genre: 'Romance, Drama',
    image: 'https://img.texasmonthly.com/2024/05/colleen-hoover-2.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250',
  },
  {
    name: 'Rick Riordan',
    genre: 'Fantasy, Adventure',
    image: 'https://images4.penguinrandomhouse.com/author/25624',
  },
]

const TopAuthors = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-800 font-serif mb-4"
        >
          Meet Our Top Authors
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 max-w-xl mx-auto mb-12"
        >
          Discover the brilliant minds behind your favorite books.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-purple-50 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden border-4 border-purple-200">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-700">{author.name}</h3>
              <p className="text-sm text-gray-500">{author.genre}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopAuthors
