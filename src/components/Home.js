import React from 'react'
import {Hero} from './Hero'
// import useFetchProducts from '../hooks/useFetchProducts'
import CardOffer from './CardOffer'
import CardPopular from './CardPopular'


export const Home = () => {

// const {data:products} = useFetchProducts()




    return (
       <> 

        <div className= "containerHome">
            <Hero />
        </div>
        <div>
            <CardOffer />
            {/* <CardOffer productOffer={products}/> */}
        </div>
        <div className= "">
            <CardPopular/>
            {/* <CardPopular productPopular={products}/> */}
        </div>

    </>
    )
}
