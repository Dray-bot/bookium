'use client'

import { Facebook, Twitter, Instagram, Mail, BookOpen } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-purple-50 to-purple-100 text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-purple-600" size={28} />
            <span className="text-2xl font-bold text-purple-800">Bookium</span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            Your digital library for discovering, collecting, and loving books. Explore stories, authors, and more.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-700">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">Browse Books</a></li>
            <li><a href="#" className="hover:text-purple-500">Top Authors</a></li>
            <li><a href="#" className="hover:text-purple-500">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-700">Support</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-purple-500">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-700">Stay Connected</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md border border-purple-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-md px-4 py-2 text-sm transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" className="text-gray-600 hover:text-purple-500 transition"><Facebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-purple-500 transition"><Twitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-purple-500 transition"><Instagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-purple-500 transition"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-purple-700">Bookium</span>. All rights reserved. Made by Dray.
      </div>
    </footer>
  )
}

export default Footer
