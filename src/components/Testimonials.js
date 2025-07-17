'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Mrs. Adesuwa O.',
    role: 'Homeowner, Lekki',
    message:
      'Buildwise delivered my dream duplex on time and exceeded my expectations. Truly professional!',
  },
  {
    name: 'Mr. Damilola K.',
    role: 'Realtor, Abuja',
    message:
      'I recommend Buildwise to all my clients. Their construction quality and speed is unmatched.',
  },
  {
    name: 'Mrs. Nkechi I.',
    role: 'Investor, Enugu',
    message:
      'As someone who invests in multiple properties, I trust Buildwise for their transparency and quality.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
        >
          Trusted by Homeowners & Investors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-12"
        >
          Here&apos;s what the Buildwise fam&apos;s got to say.
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-6 mx-2"
              >
                <p className="text-gray-700 text-base mb-4">&quot;{testimonial.message}&quot;</p>
                <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
