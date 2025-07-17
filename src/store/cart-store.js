// store/cart-store.js
import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product) => {
    const currentItems = get().cartItems
    const exists = currentItems.find(item => item.id === product.id)

    if (!exists) {
      set({
        cartItems: [...currentItems, {
          id: product.id,
          title: product.title,
          author: product.author,
          price: product.price,
          image: product.image,
          quantity: 1
        }]
      })
    }
  },

  increaseQuantity: (id) => {
    set((state) => ({
      cartItems: state.cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    }))
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      cartItems: state.cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    }))
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter(item => item.id !== id)
    }))
  },

  clearCart: () => set({ cartItems: [] })
}))
