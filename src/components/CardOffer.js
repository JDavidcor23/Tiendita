import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {URL_CARRITO} from '../helpers/Endpoint'
const CardOffer = ({ productOffer }) => {
  const [added, setAdded] = useState([])
  const offer = productOffer.filter(producto => producto.descuento !== "")
   const postData = (p) =>{
   }
  const handleAdd = (art) => {
     const producto = {
       "nombre" : art.nombre,
       "descuento" : art.descuento,
       "imagen" : art.imagen,
       "precio" : art.precio,
       "descripcion" : art.descripcion,
     }
    let productArr = added
    postData(art)
    productArr.push(art)
    setAdded(productArr)
    localStorage.setItem('Cart', JSON.stringify(added))
     axios.post(URL_CARRITO, producto)
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
  }
  return (
    <>
      <section className="containerCards">
        <h3>Ofertas</h3>
        <div className="products">
          <div className="product">
            {
              offer.map(producto => (
                <Card key={producto.id} style={{ width: '18rem', margin: '1rem' }}>
                  <div><span className="dto">{producto.descuento} % dto.</span></div>
                  <Link to= "/product">
                    <Card.Img 
                    variant="top" src={producto.imagen} />
                  </Link> 
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                      <p className="price">$ {producto.precio}/kg</p>
                    </Card.Text>
                    <Button
                      onClick={() => handleAdd(producto)}
                      className="btn btn-success"
                      style={{ backgroundColor: "#0ac763", color: "black", borderColor: "#0ac763" }}
                    >Agregar
                    </Button>
                  </Card.Body>
                </Card>
              ))
            }
          </div>  
        </div>
      </section>
    </>
  )
}

export default CardOffer
