import React from 'react'
import "./AddToCartButton.css"
import AppContext from "../../context/AppContext"

export const AddToCartButton = ({ product, buttonText, detailButton, quantity = 1, buttonType = "desktop" }) => {
  const { addToCart, setShowAddedToCart, setLastAddedProduct, setShowSidebar } = React.useContext(AppContext)

  const handleClick = (product) => {
    const chosenProduct = {...product, quantity: quantity}
    addToCart(chosenProduct)
    setLastAddedProduct(chosenProduct)
    setShowAddedToCart(true)
    setShowSidebar(false)
  }

  return (
    <button
      className={`${buttonType === "desktop" ? "addToCartButton" : "mobileAddToCartButton"} ${detailButton ? 'detailAddToCartButton' : ''}`}
      onClick={() => handleClick(product)}
    >{buttonText}</button>
  )
}
