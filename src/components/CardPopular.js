import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {URL_CARRITO} from '../helpers/Endpoint'

const CardPopular = ({ productPopular }) => {
   const postData = (p) =>{
   }
const [added, setAdded] = useState([])
  const offer = productPopular.filter(producto => producto.descuento !== "")
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
        <h3>Populares</h3>
        <div className="products">
          <div className="product">
            {
            offer.map(popular => (
            <Card key={popular.id} style={{ width: '18rem', margin: '1rem' }}>
              <Link to="/product" product={popular.nombre}>
              <Card.Img variant="top" src={popular.imagen} alt={popular.nombre}/>
              </Link>
              <Card.Body>
                <Card.Title>{popular.nombre}</Card.Title>
                <Card.Text>
                <p className="price">$ {popular.precio}/kg</p>
                </Card.Text>
                <Button
                  onClick={()=>handleAdd(popular)}
                  className="btn btn-success"
                  style={{ backgroundColor: "#0ac763", color: "black", borderColor: "#0ac763s" }}
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

export default CardPopular
