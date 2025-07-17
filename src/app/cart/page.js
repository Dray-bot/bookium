'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cart-store'

export default function CartPage() {
  const cartItems = useCartStore(state => state.cartItems)
  const increaseQuantity = useCartStore(state => state.increaseQuantity)
  const decreaseQuantity = useCartStore(state => state.decreaseQuantity)
  const removeFromCart = useCartStore(state => state.removeFromCart)

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 pt-24 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-10">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="mb-4">Your cart is empty.</p>
            <Link href="/books">
              <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
                Browse Books
              </button>
            </Link>
          </div>
        ) : (
          <>
            <ul className="space-y-6">
              {cartItems.map(item => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border border-purple-300 p-4 rounded-lg shadow-md bg-white"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded" />
                    <div>
                      <h2 className="text-lg font-semibold text-purple-800">{item.title}</h2>
                      <p className="text-sm text-gray-600">Author: {item.author}</p>
                      <p className="text-sm mt-2 font-bold text-purple-700">₦{item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center border border-purple-500 rounded overflow-hidden">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 text-xl font-bold text-purple-700 hover:bg-purple-100"
                      >
                        −
                      </button>
                      <span className="px-4 py-1 text-lg font-semibold text-purple-700 bg-purple-50">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-3 py-1 text-xl font-bold text-purple-700 hover:bg-purple-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Checkout Section */}
            <div className="mt-12 flex justify-between items-center border-t border-purple-300 pt-6">
              <p className="text-xl font-bold text-purple-700">
                Total: ₦{totalPrice.toLocaleString()}
              </p>
              <Link href="/checkout">
                <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
                  Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
