import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CardOffer = () => {
// const CardOffer = ({ productOffer }) => {

  const [added, setAdded] = useState([])

  // const handleAdd = (art) => {
  //   let productArr = added
  //   productArr.push(art)
  //   setAdded(productArr)
  //   localStorage.setItem('Cart', JSON.stringify(added))
  // }
  

  return (
    <>
      <section className="containerCards">
        <h3>Ofertas</h3>
        <div className="products">
          {/* <div className="product">
            {
              productOffer.map(art => (
                <Card key={art.id} style={{ width: '18rem', margin: '1rem' }}>
                  <div><span className="dto">{art.discount} % dto.</span></div>
                  <Link to= "/product">
                    <Card.Img onClick={() =>{
                      localStorage.setItem('id',art.id)
                    }} 
                    variant="top" src={art.image} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{art.name}</Card.Title>
                    <Card.Text>
                      <p className="price">$ {art.price}/kg <span className="oldPrice">${Math.round(art.price * (art.discount / 100))}/kg</span></p>
                    </Card.Text>
                    <Button
                      onClick={() => handleAdd(art)}
                      className="btn btn-success"
                      style={{ backgroundColor: "#d9d2e9", color: "black", borderColor: "#d9d2e9" }}
                    >Agregar
                    </Button>
                  </Card.Body>
                </Card>
              ))
            }
          </div> */}
        </div>
      </section>
    </>
  )
}

export default CardOffer
