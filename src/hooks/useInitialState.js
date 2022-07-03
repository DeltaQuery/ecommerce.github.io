import React from "react"

const initialState = {
    cart: [],
}

export const useInitialState = () => {
    const [state, setState] = React.useState(initialState)
    const [showSidebar, setShowSidebar] = React.useState(false)
    const [showAddedToCart, setShowAddedToCart] = React.useState(false)
    const [lastAddedProduct, setLastAddedProduct] = React.useState()

    const addToCart = (payload) => {
        if(state.cart.findIndex(product => product._id === payload._id) === -1){
            //payload.quantity = 1
            setState({
                ...state,
                cart: [ ...state.cart, payload]
            }) 
        } else {
            updateQuantity(payload)
        }
    }

    const updateQuantity = (payload, symbol) => {
        const productIndex = state.cart.findIndex(product => product._id === payload._id)
        let newCart = state
        if(symbol === "-"){
          newCart.cart[productIndex].quantity = newCart.cart[productIndex].quantity - 1  
        } else if(symbol === "+") {
          newCart.cart[productIndex].quantity = newCart.cart[productIndex].quantity + 1  
        } else {
          if((Number(newCart.cart[productIndex].quantity) + Number(payload.quantity)) >= 9){
            newCart.cart[productIndex].quantity = 9
          } else {
            newCart.cart[productIndex].quantity = Number(newCart.cart[productIndex].quantity) + Number(payload.quantity)
          }
        }
        setState({
            ...state
        })
    }

    const removeFromCart = (id) => {
        setState({
            ...state,
            cart: state.cart.filter(product => product._id !== id)
        })
    }

    const getCartTotals = (cart) => {
        const initialValue = 0
        const subtotalPrice = cart.reduce((accumulator,product) => accumulator + product.price * product.quantity, initialValue)
        const totalPrice = cart.reduce((accumulator,product) => product.discountedPrice === null ? accumulator + product.price * product.quantity : accumulator + product.discountedPrice * product.quantity, initialValue)
        const subtotalSaves = subtotalPrice - totalPrice
        return { subtotalPrice, subtotalSaves, totalPrice}
      }

    return {
        state,
        showSidebar,
        setShowSidebar,
        setShowAddedToCart,
        lastAddedProduct,
        setLastAddedProduct,
        showAddedToCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotals,
    }
}