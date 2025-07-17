'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-28 px-6 pb-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-extrabold text-purple-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Bookium 📚
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Bookium isn’t just an online bookstore it’s a love letter to every book lover out there.
          It was built on a simple mission: to make finding and buying books feel magical again.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          In a world filled with distractions, Bookium brings you back to the core of it all: stories, 
          knowledge, imagination. Whether you're a student chasing the next textbook, a night owl with 
          a thing for fantasy, or just someone who misses the feeling of getting lost in a great read,
          Bookium is here to make that journey effortless.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We believe books are more than just pages they’re passports. To other worlds, new perspectives, 
          and better versions of ourselves. Bookium exists to keep that magic alive. With a clean, 
          focused interface and a curated library built for readers in Nigeria, this isn’t about having 
          everything it’s about having the right things.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          No chaos. No clutter. Just books and good energy. Bookium is where you browse with intention, 
          discover with ease, and fall in love with reading all over again. Our goal? To spark curiosity, 
          fuel dreams, and create a space where every reader feels at home.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          So if you’re someone who believes that one book can change your life you’re in the right place. 
          Welcome to Bookium. Welcome home.
        </motion.p>

        <div>
          <Link href="/books">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all">
              Explore Books
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
