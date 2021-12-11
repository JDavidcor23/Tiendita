import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CardPopular = () => {
// const CardPopular = ({ productPopular }) => {

  const [added, setAdded] = useState ([])

  // const handleAdd = (art) => {
  //   let productArr = added
  //   productArr.push(art)
  //   setAdded(productArr)
  //   localStorage.setItem('Cart', JSON.stringify(added))
  // }


  return (
    <>
      <section className="containerCards">
        <h3>Populares</h3>
        <div className="products">
          <div className="product">
        {/* {
          productPopular.map(art => (
            <Card key={art.id} style={{ width: '18rem', margin: '1rem' }}>
              <Link to="/product" product={art}>
              <Card.Img variant="top" src={art.image} />
              </Link>
              <Card.Body>
                <Card.Title>{art.name}</Card.Title>
                <Card.Text>
                <p className="price">$ {art.price}/kg</p>
                </Card.Text>
                <Button
                  onClick={()=>handleAdd(art)}
                  className="btn btn-success"
                  style={{ backgroundColor: "#d9d2e9", color: "black", borderColor: "#d9d2e9" }}
                >Agregar
                </Button>
              </Card.Body>
            </Card>
          ))
        } */}
        </div>
        </div>
      </section>
    </>
  )
}

export default CardPopular
