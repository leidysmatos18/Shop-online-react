import { useState } from 'react'

const initialState = {
  cart: []
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id)
    })
  }

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }
  return {
    state,
    addToCart,
    removeFromCart
  }
}

export default useInitialState;