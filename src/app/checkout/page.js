'use client'

import { useCartStore } from '@/store/cart-store'
import { useEffect, useState } from 'react'
import { formatCurrency } from '@/utils/formatCurrency'
import Link from 'next/link'

export default function CheckoutPage() {
  const cartItems = useCartStore(state => state.cartItems)
  const clearCart = useCartStore(state => state.clearCart)
  const removeFromCart = useCartStore(state => state.removeFromCart)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6 bg-gradient-to-br from-purple-50 via-white to-purple-100">
        <div>
          <h1 className="text-4xl font-extrabold text-purple-700 mb-6 drop-shadow-lg">Your Cart is Empty 😕</h1>
          <Link href="/books">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg shadow-md transition">
              Browse Books
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleCheckout = () => {
    alert('Order placed successfully! 🚀')
    clearCart()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 pt-28 px-4 pb-36">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black text-purple-800 mb-10 text-center drop-shadow-md">Checkout</h1>

        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg border border-purple-200"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>
                <p className="text-sm text-gray-600">
                  Price: {formatCurrency(item.price)} × {item.quantity}
                </p>
                <p className="text-sm font-semibold text-purple-700 mt-1">
                  Subtotal: {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky total bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 border-t border-purple-300 p-6 flex flex-col sm:flex-row justify-between items-center shadow-xl z-50">
        <p className="text-2xl font-bold text-purple-800 mb-2 sm:mb-0">
          Total: {formatCurrency(total)}
        </p>
        <button
          className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}
