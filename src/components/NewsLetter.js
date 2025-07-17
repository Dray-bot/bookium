'use client'

import { motion } from 'framer-motion'
import { MailIcon } from 'lucide-react'

const Newsletter = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1f1c2c] via-[#3b3054] to-[#928dab] py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        >
          Stay in the Loop
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-base md:text-lg mb-8 text-gray-300 max-w-xl mx-auto"
        >
          Subscribe to our newsletter to get the hottest reads, book drops, and next-gen recommendations.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-lg"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[300px] px-5 py-3 rounded-lg text-sm bg-white/10 text-white placeholder:text-gray-300 border border-white/20 outline-none focus:ring-2 ring-white transition-all duration-300"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="inline-flex items-center gap-2 bg-white text-[#1f1c2c] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            <MailIcon className="w-5 h-5" />
            Subscribe
          </motion.button>
        </motion.form>
      </div>

      {/* ✨ Gradient floating blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500 opacity-30 rounded-full filter blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-400 opacity-30 rounded-full filter blur-3xl z-0"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-[200px] pointer-events-none z-0"
      />
    </section>
  )
}

export default Newsletter
