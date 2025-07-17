'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCartStore } from '@/store/cart-store'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Library', href: '/books' },
  { label: 'About', href: '/about' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const cartItems = useCartStore((state) => state.cartItems)

  const toggleMenu = () => setMobileOpen(!mobileOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-md bg-[#ede9fe]/80' : 'bg-[#ede9fe]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight text-[#7C3AED]">
            BOOKIUM
          </Link>

          {/* Cart Icon (Always visible) */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-[#7C3AED] transition" />
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-800"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <motion.div key={label} whileHover={{ scale: 1.05 }}>
                <Link
                  href={href}
                  className="relative font-medium text-gray-700 hover:text-[#7C3AED] transition"
                >
                  <span className="group relative">
                    {label}
                    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#7C3AED] transition-all group-hover:w-full" />
                  </span>
                </Link>
              </motion.div>
            ))}

            <motion.div whileTap={{ scale: 0.95 }} className="relative">
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-[#7C3AED] transition" />
                {cartItems?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-4 pb-4 bg-[#ede9fe]"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <Link
                  href={href}
                  key={label}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-800 hover:text-[#7C3AED] font-medium transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
