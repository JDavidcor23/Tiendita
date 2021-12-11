import React, {useEffect, useState} from 'react'
import {Hero} from './Hero'
// import useFetchProducts from '../hooks/useFetchProducts'
import CardOffer from './CardOffer'
import CardPopular from './CardPopular'
import {getProducts} from '../helpers/getProducts'


export const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
         getProducts()
         .then(data => setProducts(data))
     }, [])

     
    return (
       <> 

        <div className= "containerHome">
            <Hero />
        </div>
        <div>
            <CardOffer productOffer={products}/> 
        </div>
        <div className= "">
            <CardPopular productPopular={products}/> 
        </div>

    </>
    )
}
