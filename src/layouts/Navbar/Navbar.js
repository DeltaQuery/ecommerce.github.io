import React from 'react'
import "./Navbar.css"
import marateca from "../../assets/maratecalogo.png"
import { BiMenu } from "react-icons/bi"
import { BiCart } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import Sidebar from '../Sidebar/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import { AddedToCart } from '../AddedToCart/AddedToCart'

export default function Navbar() {

    const { state, showSidebar, setShowSidebar, setShowAddedToCart } = React.useContext(AppContext)
    const navigate = useNavigate()
    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
        setShowAddedToCart(false)
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/value=${e.target[0].value}`)
    }

    const handleSearchIcon = () => {
       
    }
    
    return (
        <>
        <nav>
            <div className="navbarLeft">
                <Link to="/"><picture className="logoPicture"> 
                    <source srcSet={marateca} alt="Marateca logo" media="(min-width:600px)" height="40px" />
                    <img className="logoImg" src={marateca} alt="Marateca logo" height="36px" loading="lazy"/>
                </picture></Link>

                <div className="menuIconContainer" onClick={handleShowSidebar}>
                    <BiMenu
                        className=""
                        size="32"
                        fill="white"
                    />
                    <span className="navText">Menú</span>
                </div>

                <form className="searchInputContainer" onSubmit={handleSubmit}>
                <input type="text" className="searchInput" />
                <BiSearch
                    className="searchIcon"
                    size="22"
                    fill="#003A4E"
                    onClick={handleSearchIcon}
                />
                </form>
            </div>

            <Link to="/cart" className="cartLinkContainer"><div className="navbarRight">
                <BiCart
                    className=""
                    size="38"
                    fill="white"
                />
                { state.cart.length > 0 ? <div className="cartQuantity">{state.cart.length}</div> : null }
                <span className="navText">Carrito</span>
            </div></Link>

        </nav>
        <Sidebar
        />
        <AddedToCart
        />
        </>
    )
}
