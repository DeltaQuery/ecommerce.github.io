import React from 'react'
import pruebabanner from "../../assets/banners/prueba.png"
import sampleBanner from "../../assets/banners/sampleBanner.jpg"
import { ProductList } from '../../components/ProductList/ProductList'
import { Product } from '../../components/Product/Product'
import { CategoriesBox } from '../../components/CategoriesBox/CategoriesBox'
import deal1 from "../../assets/banners/deal1.jpg"
import deal2 from "../../assets/banners/deal2.png"
import deal3 from "../../assets/banners/deal3.png"
import { IgBox } from '../../components/IgBox/IgBox'

export const Home = () => {
  return (
    <>
         <picture>
          <source className="heroBanner" srcSet={pruebabanner} alt="Hero banner" media="(min-width:600px)"/>
          <img className="heroBanner" src={pruebabanner} alt="Hero banner" loading="lazy"/>
        </picture>

        <div className="mainContent">

          <ProductList
            listTitle="¡Lo más destacado! 🌟"
            category={51}
            >
            <Product
              slides={4}
              listTitle="destacados"
              category={51}
            />
          </ProductList>

          <div className="dealBanners">
            <img src={deal1} loading="lazy"></img>
            <img src={deal2} loading="lazy"></img>
            <img src={deal3} loading="lazy"></img>
          </div>

          <ProductList
            listTitle="¡Ofertas! ⏰"
            category={50}
          >
            <Product
              slides={4}
              listTitle="ofertas"
              category={50}
            />
          </ProductList>

          <img src={sampleBanner} loading="lazy"></img>

          <ProductList
            listTitle="¡Últimas novedades! 🔥"
            category={52}>
            <Product
              slides={4}
              listTitle="novedades"
              category={52}
            />
          </ProductList>

          <img src={sampleBanner} loading="lazy"></img>

          <ProductList
            listTitle="¡Más vendidos! 🤯" 
            category={53}>
            <Product
              slides={4}
              listTitle="masVendidos"
              category={53}
            />
          </ProductList>

            <CategoriesBox 
            listTitle="Categorías"/>

            <IgBox
            listTitle="¡Síguenos en Instagram!"/>

          <img src={sampleBanner} loading="lazy"></img>

        </div>
        </>
  )
}
