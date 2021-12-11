import React, { useEffect, useState } from 'react'
import { URL_CARRITO } from '../helpers/Endpoint'
import axios from 'axios'

const Carrito = () => {

    const [carProducts, setcarProducts] = useState([])

    const [number, setNumber] = useState(1)
    const getCarrito = async() => {

        const resp = await fetch(URL_CARRITO)
        const productos = await resp.json()        
        return productos      
    }
     const handleChange = (e) =>{
         setNumber(e.target.value)
     }
    // const sumar =(id)=>{
    //     const thisId = carProducts.filter(p => p.id === id)
    //     const resultado =  Number(thisId[0].precio) * Number(number)
    //     console.log(resultado)
    //     setNumber(0)
    // }
    useEffect(() => {
        getCarrito()
        
        .then(data => setcarProducts(data))
    }, [carProducts])
    
    const deleteData= (id) => {
        console.log(id)
        axios.delete(URL_CARRITO + id)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    } 
    
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>  
                        <th>Imagen</th> 
                        <th>Descripcion</th>                                                     
                        </tr>
                    </thead>
                    <tbody>
                       {
                           carProducts.map(producto =>(
                            <tr>  
                                <td>
                                    <img src={producto.imagen} alt={producto.nombre}/>
                                </td>
                                <td>{producto.nombre}<br/>{producto.precio} </td>
                                <td>
                                    <button>-</button>
                                    <input type="num" value={number}onChange={handleChange}></input>
                                    {/* <button onClick={() => sumar(producto.id)}>+</button> */}
                                </td>
                                <td>
                                    <button id={producto.id} onClick={()=> deleteData(producto.id)}>Eliminar</button>
                                    
                                </td>
                            </tr>
                            
                            
                           ))
                               
                           
                       }
                    </tbody>
                </table>
            </div>   
        </>
    )
}

export default Carrito