import {useState, useEffect} from 'react'
import { getProducts } from "../helpers/getProducts";

const useFetchProducts = () => {
    const [state, setState] = useState({
        data:[]
    })

    // useEffect(() => {
    //     getProducts()
    //     .then((art) =>{
    //         setState({
    //             data:art
    //         })
    //     })
    // }, [])

    
  return state
}

export default useFetchProducts
