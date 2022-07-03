import React from 'react'
import { BiShareAlt } from "react-icons/bi"
import { MdNavigateBefore } from "react-icons/md"
import { Link, useNavigate, useParams } from "react-router-dom"
import "./Search.css"
import { productArr } from '../../database/productArr'
import { categoriesArr } from '../../database/categoriesArr'
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton'
import sampleBanner from "../../assets/banners/sampleBanner.jpg"
import { ProductList } from '../../components/ProductList/ProductList'
import { Product } from '../../components/Product/Product'
import { CategoriesBox } from '../../components/CategoriesBox/CategoriesBox'
import { IgBox } from '../../components/IgBox/IgBox'

export const Search = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [searchedProducts, setSearchedProducts] = React.useState()
    const [typeOfSearch, setTypeOfSearch] = React.useState([])

    React.useEffect(() => {
        const params = id.split("=")
        if (params[0] === "category") {
            const category = categoriesArr.filter(x => x.categoryId == params[1])
            if (category.length === 0) {
                setTypeOfSearch([params[0], null, false])
                setSearchedProducts([])
            } else {
                if (params[1] == 50) {
                    setTypeOfSearch([params[0], category[0].category, true])
                    setSearchedProducts(productArr.filter(x => x.discountedPrice))
                } else {
                    setTypeOfSearch([params[0], category[0].category, true])
                    setSearchedProducts(productArr.filter(x => x.category.some(g => params[1].includes(g))))
                }
            }
        } else if (params[0] === "value") {
            setTypeOfSearch([params[0], params[1], true])
            setSearchedProducts(productArr.filter(x => x.name.toLowerCase().includes(params[1].toLowerCase()) || x.features.some((item) => item.toLowerCase().includes(params[1].toLowerCase()))))
        }
    }, [id])

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

            <div className="searchResults">
                {(typeOfSearch[2] === false) && <h4><span>Lo sentimos. La búsqueda que tratas de realizar </span> <span>no es posible.</span></h4>}
                {(typeOfSearch[0] === "category" && searchedProducts.length > 0) && <h4><span>Resultados para:</span> <span>"{typeOfSearch[1]}"</span></h4>}
                {(typeOfSearch[0] === "value" && searchedProducts.length > 0) && <h4><span>Resultados para:</span> <span>"{typeOfSearch[1]}"</span></h4>}
                {(typeOfSearch[2] && searchedProducts.length < 1) && <h4><span>No hay resultados para:</span> <span>"{typeOfSearch[1]}"</span></h4>}
            </div>

            <div className="searchedProductsContainer">
                {searchedProducts && searchedProducts.map(product => {
                    return <article
                        className="productContainer searchedProductContainer"
                        key={product._id}>

                        <div className="productImgContainer">
                            <Link to={`/details/${product._id}`} className="productImgLink"><img className="productImg" src={product.images[0]} loading="lazy"></img></Link>
                            <AddToCartButton
                                buttonText=" + Carrito"
                                buttonType="mobile"
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
            </div>

            <img src={sampleBanner} loading="lazy"></img>

            <ProductList
                listTitle="¡Más vendidos! 🤯">
                <Product
                    slides={4}
                    listTitle="masVendidos"
                />
            </ProductList>

            <CategoriesBox 
            listTitle="Categorías"/>

            <IgBox
            listTitle="¡Síguenos en Instagram!"/>

            <img src={sampleBanner} loading="lazy"></img>
        </div>
    )
}
