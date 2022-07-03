import React from 'react'
import "./CategoriesBox.css"
import { categoriesArr } from "../../database/categoriesArr"
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'

export const CategoriesBox = ({listTitle}) => {
  const [categories, setCategories] = React.useState()
  const { setShowSidebar, setShowAddedToCart } = React.useContext(AppContext)
  const handleShowSidebar = () => {
        setShowSidebar(true)
        setShowAddedToCart(false)
  }

  React.useEffect(() => {
    setCategories(categoriesArr.slice(0, 8))
  }, [])

  return (
    <section className="productsContainer">

      <div className="listTitleContainer">
        <h1>{listTitle}</h1>
        <a className="moreLink moreCategories"
        onClick={() => handleShowSidebar()}>Ver más</a>
      </div>

      <div className="productsRow">
        <section className="productList">
          <div className="categoriesBoxContainer">

            {categories && categories.map(category => {
              return <div className="categoryBox" key={category.category}>
                <Link to={`/search/category=${category.categoryId}`} className="categoryImgContainer"><img src={category.image} loading="lazy"></img> </Link>
                <Link to={`/search/category=${category.categoryId}`}><h4 className="categoryNameContainer">{category.category}</h4></Link>
              </div>
            })
            }
          </div>
        </section>
      </div>
    </section>
  )
}
