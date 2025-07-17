'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const phrases = [
  'Explore Captivating Stories',
  'Read. Learn. Escape.',
  'Welcome to Bookium.'
]

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[index]
    const typingSpeed = isDeleting ? 40 : 90

    const timeout = setTimeout(() => {
      if (!isDeleting && subIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && subIndex === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1))
      }

      setText(currentPhrase.substring(0, subIndex))
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting, index])

  return (
    <section className="bg-white min-h-screen flex items-center px-4 font-sans">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-[2.75rem] md:text-5xl font-bold leading-tight mb-6 text-[#3b0764]">
            {text}
          </h1>
          <p className="text-lg text-[#5b21b6] mb-8 leading-relaxed max-w-md">
            Bookium is your digital bookshelf. Browse a curated collection of stories, knowledge, and vibes — all in one place.
          </p>
          <Link
            href="/books"
            className="inline-block bg-[#5b21b6] text-white px-6 py-3 rounded-full font-medium hover:bg-[#4c1d95] transition duration-300 shadow-lg"
          >
            Browse Library
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" 
            alt="Books" 
            className="w-full max-w-xl rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
