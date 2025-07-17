'use client'

import { useCartStore } from '@/store/cart-store'

const AddToCartButton = ({ product }) => {
  const addToCart = useCartStore(state => state.addToCart)

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton
