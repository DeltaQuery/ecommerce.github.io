import React from 'react'
import { BiCart } from "react-icons/bi"
import AppContext from '../../context/AppContext'
import { Product } from '../../components/Product/Product'
import { useLocation, useNavigate } from 'react-router-dom'
import "./AddedToCart.css"

export const AddedToCart = () => {
    const { showAddedToCart, setShowAddedToCart, setShowSidebar, lastAddedProduct } = React.useContext(AppContext)
    const navigate = useNavigate()
    const location = useLocation()
    React.useEffect(() => {
        setShowAddedToCart(false)
    }, [location.key])

    const closeAddedToCart = () => {
        setShowAddedToCart(false)
        setShowSidebar(false)
    }

    const goToCart = () => {
        navigate(`/cart`)
    }

    return (
        <div className={`sidebarContainer addedToCartContainer ${showAddedToCart ? 'sidebarDisplayed' : 'sidebarHidden'}`}>

            <div className="sidebarOptionsMenu addedToCartMenu">

                <div className="dealsContainer addedToCartTitleContainer">
                        <BiCart
                            className=""
                            size="28"
                            fill="#003A4E"
                        />

                        <span>Tu producto se agregó al carrito</span>

                    <div
                    className="removeProductIcon"
                    onClick={() => closeAddedToCart()}
                  >X</div>
                </div>

                <div className="categoriesContainer addedToCartProductContainer">

                { lastAddedProduct && <Product
                    cartFormat={true}
                    cartSidenav={true}
                    cartProduct={lastAddedProduct}
                    key={lastAddedProduct._id}
                    />
                  } 
                    
                    <button className="addToCartButton addedToCartButton"
                    onClick={goToCart}>
                        Ir al Carrito
                    </button>

                    <span
                    className="keepShoppingSpan"
                    onClick={() => closeAddedToCart()}>
                        Seguir comprando</span>
                </div>

            </div>
        </div>
    )
}
