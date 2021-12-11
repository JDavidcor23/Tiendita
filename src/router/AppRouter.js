import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { BarNav } from '../components/BarNav'
import { Home } from '../components/Home'
import {getProducts} from '../helpers/getProducts'
import Carrito from '../components/Carrito'
export const AppRouter = () => {
    
    return (
        <div>
            <Router>
                <BarNav />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route  path="/carrito" element={<Carrito/>} />
                </Routes>
            </Router>
        </div>
    )
}