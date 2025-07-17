'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const testimonials = [
  {
    name: 'Mrs. Adesuwa O.',
    role: 'Homeowner, Lekki',
    message:
      'Bookium changed how I read. Their collection is top-tier, and delivery is crazy fast!',
  },
  {
    name: 'Daniel E.',
    role: 'Student, UNILAG',
    message:
      "I used to struggle finding affordable books. Now, Bookium's got me hooked on reading again.",
  },
  {
    name: 'Chioma A.',
    role: 'Book Club Founder',
    message:
      'As someone who runs a club, Bookium makes it easy to get all the books we need in one place.',
  },
  {
    name: 'Uche O.',
    role: 'Tech Bro',
    message:
      'No cap, Bookium is vibes. Smooth UI, dope service, and mad variety.',
  },
]

const Testimonials = () => {
  return (
    <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-purple-50 via-white to-purple-100">
      {/* Floating Sparkle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 animate-pulse opacity-10">
          <Sparkles className="w-48 h-48 text-purple-400" />
        </div>
        <div className="absolute bottom-20 right-10 animate-spin-slow opacity-10">
          <Sparkles className="w-32 h-32 text-yellow-300" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 font-serif"
        >
          Real Words. Real Readers.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-12"
        >
          {"Here's what the Bookium fam's got to say."}
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          className="px-4"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/80 backdrop-blur-xl border border-purple-100 rounded-3xl shadow-xl p-8 max-w-3xl mx-auto"
              >
                <p className="text-gray-800 text-lg md:text-xl italic leading-relaxed mb-6">
                  “{item.message}”
                </p>
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-purple-700 text-xl">
                    {item.name}
                  </h4>
                  <span className="text-sm text-gray-500">{item.role}</span>
                </div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                  VERIFIED READER
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
