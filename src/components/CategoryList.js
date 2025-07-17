'use client'

import { useState } from 'react'
import clsx from 'clsx'

const categories = [
  'All',
  'Fiction',
  'Romance',
  'Science Fiction',
  'Mystery',
  'Fantasy',
  'Biography',
  'History',
  'Thriller'
]

const CategoryList = () => {
  const [active, setActive] = useState('All')

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#6B21A8] mb-6 font-serif">Explore Categories</h2>
        <div className="relative overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#6B21A8]/60 scrollbar-track-transparent">
          <div className="flex gap-4 snap-x snap-mandatory min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={clsx(
                  'snap-start px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border',
                  active === category
                    ? 'bg-[#6B21A8] text-white border-transparent shadow-lg'
                    : 'bg-white text-[#6B21A8] border-[#6B21A8]/40 hover:bg-[#6B21A8]/10'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryList
