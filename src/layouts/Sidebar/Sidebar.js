import React from 'react'
import { BiPurchaseTagAlt } from "react-icons/bi"
import { BiCategory } from "react-icons/bi"
import { Link } from "react-router-dom"
import AppContext from '../../context/AppContext'
import { useLocation } from 'react-router-dom'
import { categoriesArr } from '../../database/categoriesArr'
import "./Sidebar.css"

const NextIcon = () => {
    return <i className="fa fa-angle-right nextIcon"></i>
}

export default function Sidebar() {
    const { showSidebar, setShowSidebar, setShowAddedToCart } = React.useContext(AppContext)

    const location = useLocation()
    React.useEffect(() => {
        setShowSidebar(false)
    }, [location.key])

    const closeSidebar = () => {
        setShowAddedToCart(false)
        setShowSidebar(false)
    }

    return (
        <div className={`sidebarContainer ${showSidebar ? 'sidebarDisplayed' : 'sidebarHidden'}`}>

            <div className="sidebarOptionsMenu">

                <div className="dealsContainer">
                    <Link to={`/search/category=50`} className="dealsLink">
                        <BiPurchaseTagAlt
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        Ofertas
                    </Link>

                    <div
                    className="removeProductIcon closeSidebarIcon"
                    onClick={() => closeSidebar()}
                  >X</div>
                </div>

                <div className="categoriesContainer">
                    <div>
                        <BiCategory
                            className=""
                            size="20"
                            fill="#003A4E"
                        />
                        Categorías
                    </div>

                    {categoriesArr && categoriesArr.map(category => {
                        return <Link key={category.categoryId} to={`/search/category=${category.categoryId}`} className="categoryLink">{category.category} <NextIcon /></Link>
                    })}
                </div>

            </div>
        </div>
    )
}
