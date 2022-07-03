import React from 'react'
import "./ProductList.css"
import { Link } from 'react-router-dom'

export const ProductList = (props) => {
  return (
      <section className="productsContainer">

        <div className="listTitleContainer">
          <h1>{props.listTitle}</h1>
          <Link to={`/search/category=${props.category}`} className="moreLink">Ver más</Link>
        </div>

        <div className="productsRow">
          <section className="productList">{props.children}</section>
        </div>
      </section>
  )
}
