import React from 'react'
import "./Cart.css"
import { useNavigate } from "react-router-dom"
import { MdNavigateBefore } from "react-icons/md"
import AppContext from '../../context/AppContext'
import roundNumber from '../../hooks/roundNumber'
import { Product } from '../../components/Product/Product'

export const Cart = () => {
  const navigate = useNavigate()
  const { state, getCartTotals } = React.useContext(AppContext)

  const { subtotalPrice, subtotalSaves, totalPrice } = getCartTotals(state.cart)

  const handleContactInfo = () => {
    if (state.cart[0]) {
      navigate("/contact")
    }
  }

  return (
    <div className="mainContent mainCartContent">
      <div className="cartTitleContainer">
        <div className="listTitleContainer cartTitleContent">
          <div>
            <a onClick={() => navigate(-1)}>
              <MdNavigateBefore className="" size="20" color="##3E70AC" />
            </a>
            <h4>Tu Carrito</h4>
          </div>
          <h4>${roundNumber(totalPrice)}</h4>
        </div>
      </div>

      <div className="cartContent">
        <div className="cartProductsContainer">
          {!state.cart[0] && <h2 className="emptyCart">¡Tu carrito está vacío!</h2>}

          {state.cart[0] && state.cart.map(product => {
            return <Product
              cartFormat={true}
              cartProduct={product}
              key={product._id}
            />
          })

          }
        </div>

        <div className="cartResumeContainer">
          <div className="cartResumeContent">
            <h4>Resumen de tu Pedido</h4>
            <div className="cartResumeLine"><p>Subtotal</p> <span>${roundNumber(subtotalPrice)}</span></div>
            { }
            <div className="cartResumeLine"><p>Descuentos</p> <span className="detailDiscount">${roundNumber(subtotalSaves)}</span></div>
            <div className="separator"></div>
            <div className="cartResumeLine"><h4>Total</h4> <h4>${roundNumber(totalPrice)}</h4></div>
          </div>

          <div className="desktopGoToContactInfo">
          <button
            className="nextToContactButton"
            onClick={handleContactInfo}
          >Continuar a Datos de Contacto</button>
        <p>El total no incluye impuestos o costos de envío.</p>
        </div>
        </div>

        <div className="fixedGoToContactInfo">
          <button
            className="nextToContactButton"
            onClick={handleContactInfo}
          >Continuar a Datos de Contacto</button>
          <p>El total no incluye impuestos o costos de envío.</p>
        </div>

        
      </div>
    </div>
  )
}
