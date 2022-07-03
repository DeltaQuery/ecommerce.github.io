import React from 'react'
import { BiShareAlt } from "react-icons/bi"
import { MdNavigateBefore } from "react-icons/md"
import { productArr } from '../../database/productArr'
import { ProductList } from '../../components/ProductList/ProductList'
import { Product } from '../../components/Product/Product'
import { Link, useNavigate, useParams } from "react-router-dom"
import AppContext from '../../context/AppContext'
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton'

import "./Details.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export const Details = () => {

    const { addToCart } = React.useContext(AppContext)

    const handleClick = (product) => {
        addToCart(product)
    }
    const { id } = useParams()
    const navigate = useNavigate()
    const onDetailCollapsibleButtonClick = () => {
        setShowDetailCollapsible(!showDetailCollapsible)
    }
    const onModelCollapsibleButtonClick = () => {
        setShowModelCollapsible(!showModelCollapsible)
    }
    const [showDetailCollapsible, setShowDetailCollapsible] = React.useState(true)
    const [showModelCollapsible, setShowModelCollapsible] = React.useState(true)
    const [number, setNumber] = React.useState(1)
    const quantity = [
        1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
    const [productDetail, setProductDetail] = React.useState()
    const [relatedProducts, setRelatedProducts] = React.useState()
    const [models, setModels] = React.useState()
    const settings = {
        dots: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0
    };

    React.useEffect(() => {
        const result = productArr.filter(x => x._id === id)
        setProductDetail(result)
        setRelatedProducts(productArr.filter(x => x.category.some(z => result[0].category.includes(z) )))

        let modelsArr = []
        const resultModels = Object.entries(result[0].models)
        const resultModelsValues = Object.entries(resultModels)

        const fillModelArr = () => {
            if (resultModelsValues[0]) {
                for (let [key, value] of Object.entries(resultModelsValues[0][1][1])) {
                    let result = productArr.filter(x => x._id === value._id)
                    modelsArr.push(result)
                }
            }
        }
        fillModelArr()
        setModels(modelsArr)
    }, [id]);


    return (
        <div className="mainContent mainDetailContent">
            <div className="listTitleContainer detailTitleContainer">
                <a onClick={() => navigate(-1)}>
                    <MdNavigateBefore className="" size="16" color="##3E70AC" />
                    Regresar
                </a>
                <a href="#">
                    <BiShareAlt className="" size="20" fill="#444444" />
                </a>
            </div>

            {productDetail && (
                <article
                    className="productContainer detailContainer"
                    key={productDetail[0]._id}
                >
                    <Slider {...settings} className="detailImgContainer">
                        {productDetail[0].images.map(image => {
                            return <img className="detailImg" src={image} key={productDetail[0]._id} loading="lazy"></img>
                        })}
                    </Slider>


                    <div className="detailInfoContainer">
                        <h1 className="detailName">{productDetail[0].name}</h1>

                        <div className="detailPriceContainer">
                            {productDetail[0].discountedPrice && (
                                <div className="detailDiscountContainer">
                                    <span className="detailDiscount">
                                        {productDetail[0].discount}
                                    </span>
                                    <span className="detailDiscountedPrice">
                                        ${productDetail[0].discountedPrice}
                                    </span>
                                </div>
                            )}

                            <div className="detailRegularContainer">
                                {productDetail[0].discount && (
                                    <span className="detailRegularSpan">Precio regular:</span>
                                )}
                                <span
                                    className={
                                        productDetail[0].discountedPrice
                                            ? "detailRegularPrice"
                                            : "detailDiscountedPrice"
                                    }
                                >
                                    ${productDetail[0].price}
                                </span>
                            </div>
                        </div>

                        <div className="separator"></div>

                        {models.length > 0 && (
                            <section className="modelsContainer">
                                <button
                                    type="button"
                                    className="detailModelButton"
                                    onClick={onModelCollapsibleButtonClick}
                                >
                                    <span className="">{Object.keys(productDetail[0].models)}:</span><span>{productDetail[0].model}</span> <span></span>
                                </button>

                                <div className={showModelCollapsible ? 'modelCollapsibleContentShow' : 'modelCollapsibleContentHidden'}>
                                    {models.map((model) => {
                                        return (
                                            <Link
                                                to={`/details/${model[0]._id}`}
                                                key={model[0]._id}
                                                className=""
                                            >
                                                <article className={`modelContent ${productDetail[0]._id === model[0]._id ? 'selectedModel' : ''}`}>
                                                    <span className="modelModel">
                                                        {model[0].model}
                                                    </span>
                                                    {model[0].discountedPrice && <span className="modelPrice">
                                                        {model[0].discountedPrice}
                                                    </span>}
                                                    {!model[0].discountedPrice && <span className="modelPrice">
                                                        {model[0].price}
                                                    </span>}
                                                </article>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </section>
                        )}

                        <div className="detailsCollapsibleContainer">
                            <button
                                type="button"
                                className="detailCollapsibleButton"
                                onClick={onDetailCollapsibleButtonClick}
                            >
                                <span>Funciones y detalles</span> <span></span>
                            </button>
                            <div
                                className={`detailCollapsibleContentHidden ${showDetailCollapsible ? "detailCollapsibleContentShow" : ""
                                    }`}
                            >
                                <ul>
                                    {productDetail[0].features.map((feature, index) => {
                                        return <li key={index}>• {feature}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="fixedDetailButtonsContainer">
                            <select className="quantityDetails"
                            onChange={(e) => setNumber(e.target.value)}>
                                {quantity.map((quantity) => {
                                    return (
                                        <option value={quantity} key={quantity}>
                                            {quantity}
                                        </option>
                                    )
                                })}
                            </select>
                            <AddToCartButton
                                onClick={() => handleClick(productDetail[0])}
                                product={productDetail[0]}
                                buttonText="Agregar al Carrito"
                                detailButton={true}
                                quantity={number}
                            />
                        </div>
                    </div>
                </article>
            )}

            <ProductList listTitle="Productos relacionados 🌟">
                <Product
                    slides={4}
                    product={relatedProducts}
                />
            </ProductList>
        </div>
    );
}
