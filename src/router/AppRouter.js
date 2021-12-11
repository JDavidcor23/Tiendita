import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { BarNav } from '../components/BarNav'
import { Home } from '../components/Home'
import { ManageProducts } from '../components/ManageProducts'
import { Product } from '../components/Product'
// import {ENDPOINT_URL} from '../helpers/Endpoint'

export const AppRouter = () => {
    
    const [allProducts, setAllProducts] = useState([])

    // useEffect(() => {
    //     getAllProducts()
    // }, [])

    // const getAllProducts = async () => {
    //     const res = await fetch(ENDPOINT_URL) 
    //     const data = await res.json()
    //     setAllProducts(data)
    // }

    return (
        <div>
            <Router>
                <BarNav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/form" element={<ManageProducts />} />
                    <Route exact path="/product" element={<Product allProducts={allProducts}/>} />
                </Routes>
            </Router>
        </div>
    )
}