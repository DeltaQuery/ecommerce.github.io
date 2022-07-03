import './App.css'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './layouts/Navbar/Navbar'
import { Footer } from './layouts/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Details } from './pages/Details/Details'
import { Search } from "./pages/Search/Search"
import { Cart } from './pages/Cart/Cart'
import AppContext from './context/AppContext'
import { useInitialState } from './hooks/useInitialState'
import { Contact } from './pages/Contact/Contact'

function App() {
  const initialState = useInitialState()

  const location = useLocation()
    React.useEffect(() => {
      window.scrollTo(0, 0)
    }, [location.key])

  return (
    <AppContext.Provider value={initialState}>
        <Navbar />
        <main className="mainContainer">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<Details />} />
            <Route exact path="/search/:id" element={<Search />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" element={<Contact />} />

            <Route path='*' element={<Home />} />
          </Routes>
          <Footer />
        </main>
    </AppContext.Provider>
  );
}

export default App
