import React from "react"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "../Product/Product.css"
import { productArr } from '../../database/productArr'
import { AddToCartButton } from '../AddToCartButton/AddToCartButton'
import AppContext from "../../context/AppContext"
import roundNumber from "../../hooks/roundNumber"

export const Product = ({ slides = 4, cartFormat, cartSidenav, cartProduct, category, product }) => {
    const [products, setProducts] = React.useState()
    const { updateQuantity, removeFromCart } = React.useContext(AppContext)

    const handleQuantity = (payload, symbol) => {
        updateQuantity(payload, symbol)
    }

    const handleRemove = (id) => {
        removeFromCart(id)
    }

    React.useEffect(() => {
        if (product) {
            setProducts(product)
        } else {
            if (!category) {
                setProducts(productArr)
            } else {
                if (category === 50) {
                    setProducts(productArr.filter(x => x.discountedPrice))
                } else {
                    setProducts(productArr.filter(x => x.category.some(e => e === category)))
                }
            }
        }
    }, [])

    const settings = {
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: slides,
        slidesToScroll: slides,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: slides - 1,
                    slidesToScroll: slides - 1
                }
            },
            {
                breakpoint: 600,
                settings: "unslick"
            }
        ]
    };

    return (
        <>
            {!cartFormat && <Slider {...settings}>

                {products && products.map(product => {
                    return <article
                        className="productContainer"
                        key={product._id}>

                        <div className="productImgContainer">
                            <Link to={`/details/${product._id}`} className="productImgLink"><img className="productImg" src={product.images[0]} loading="lazy"></img></Link>
                            <AddToCartButton
                                buttonText=" + Carrito"
                                buttonType="mobile"
                                product={product}
                            />
                        </div>

                        <Link to={`/details/${product._id}`} className="productTitleContainer">
                            {product.name}
                        </Link>

                        <div className="productPriceContainer">
                            {product.discountedPrice && <span className="productDiscountedPrice">${product.discountedPrice}</span>}
                            <span className="productRegularPrice">${product.price}</span>
                        </div>

                        <AddToCartButton
                            buttonText="Agregar al Carrito"
                            product={product}
                        />

                    </article>
                })
                }

            </Slider>
            }

            {(cartFormat && cartProduct) && <article
                className="productContainer cartProductContainer"
                key={cartProduct._id}>

                <div className="productImgContainer cartImgContainer">
                    <Link to={`/details/${cartProduct._id}`} className="productImgLink cartProductImgLink"><img className="productImg cartImg" src={cartProduct.images[0]} loading="lazy"></img></Link>
                </div>

                <div className="cartProductInfo">
                    <div className="cartProductTitle">
                        <Link to={`/details/${cartProduct._id}`} className={`addedToCartProductTitle ${cartSidenav ? 'sidebarDisplayed' : ''}`}>
                            {cartProduct.name}
                        </Link>

                        {!cartSidenav && <div
                            className="removeProductIcon"
                            onClick={() => handleRemove(cartProduct._id)}
                        >X</div>
                        }

                    </div>

                    <div className="detailPriceContainer cartPriceContainer">
                        {cartProduct.discountedPrice && (
                            <div className="detailDiscountContainer cartDiscountContainer">
                                {!cartSidenav ? <span className="detailDiscountedPrice cartDiscountedPrice">${roundNumber(cartProduct.discountedPrice * cartProduct.quantity)}</span> : <span className="detailDiscountedPrice cartDiscountedPrice">${roundNumber(cartProduct.discountedPrice)}</span>}

                                {!cartSidenav ? <span className="detailDiscount cartDiscount">-{roundNumber(((100 / cartProduct.discountedPrice) * cartProduct.price) - 100)}%</span> : <span className="detailDiscount cartDiscount">-{roundNumber(((100 / cartProduct.discountedPrice) * cartProduct.price) - 100)}%</span>}
                            </div>
                        )}

                        <div className="detailRegularContainer cartPriceContainer">
                            {!cartSidenav ? <span
                                className={
                                    cartProduct.discountedPrice
                                        ? "detailRegularPrice cartRegularPrice"
                                        : "detailDiscountedPrice cartDiscountedPrice"
                                }>${roundNumber(cartProduct.price * cartProduct.quantity)}</span> : <span
                                    className={
                                        cartProduct.discountedPrice
                                            ? "detailRegularPrice cartRegularPrice"
                                            : "detailDiscountedPrice cartDiscountedPrice"
                                    }>${roundNumber(cartProduct.price)}</span>}
                        </div>
                    </div>

                    {!cartSidenav && <div className="quantityContainer">
                        <button
                            disabled={cartProduct.quantity === 1}
                            onClick={() => handleQuantity(cartProduct, "-")}
                        >-</button>
                        <input type="text" className="quantityInput" readOnly value={cartProduct.quantity}></input>
                        <button
                            disabled={cartProduct.quantity > 8}
                            onClick={() => handleQuantity(cartProduct, "+")}
                        >+</button>
                    </div>
                    }


                </div>
            </article>
            }
        </>
    );
}