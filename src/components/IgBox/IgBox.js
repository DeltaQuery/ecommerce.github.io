import React from 'react'
import "./IgBox.css"
import { feedArr } from '../../database/feedArr'
import { Link } from 'react-router-dom'

export const IgBox = ({listTitle}) => {
    const [feed, setFeed] = React.useState()

    React.useEffect(() => {
        setFeed(feedArr)
    }, [])

    return (
        <section className="productsContainer">

            <div className="listTitleContainer">
                <h1>{listTitle}</h1>
                <a href="https://www.instagram.com/marateca.ve/?hl=es" target="_blank">Ver más</a>
            </div>

            <div className="productsRow">
                <section className="productList">
                    <div className="categoriesBoxContainer igBoxContainer">

                        {feed && feed.map((post, index) => {
                            return <div className="categoryBox igBox" key={index}>
                                <a href={post.link} target="_blank">
                                    <img src={post.image} loading="lazy"></img>
                                </a>
                            </div> 
                        })
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}
