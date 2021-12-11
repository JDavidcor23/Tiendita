import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import { ENDPOINT_URL} from '../helpers/Endpoint'

export const Product = () => {
// export const Product = ({ allProducts }) => {

    // let test = allProducts
    console.log(test)

    let idGet = Number(localStorage.getItem('id'))
    console.log(idGet)

    // const productSelected = (idGet) => {
    //     return allProducts.find(product => product.id === idGet)
    // }

    // let productToPaint = productSelected(idGet)

    const requestOptions = {
        method: 'DELETE',
      };

    // const deleteProduct = async(idGet) => {
    //     await fetch(ENDPOINT_URL+idGet,requestOptions)
    // }

    return (
        <>
            <div className="cardDetaill" style={{ display: 'flex', flexDirection: 'row' }}>
                {
                    <Card style={{ width: '18rem', flex: 1 }}>
                        <div className="row no-gutters">
                            {/* <div className="col-4">
                                <Card.Img variant="top" src={productToPaint.image} />
                            </div> */}
                            <div className='col-8'>
                                <Card.Body>
                                    {/* <Card.Title><h5>{productToPaint.name}</h5></Card.Title>
                                    <Card.Subtitle><p className="price">${productToPaint.price}/kg</p></Card.Subtitle> */}
                                    {/* <Card.Text>
                                    <code>Precios con IVA incluido</code>
                                        <p>{productToPaint.category}</p>
                                        <br/>
                                    <p>Peso aproximado por pieza, puede variar de acuerdo al peso real</p>
                                    </Card.Text> */}
                                    <Button style={{background: "#d9d2e9", border:"none"}}>Agregar al Carrito</Button>
                                    <Button  variant="danger mx-2">Eliminar Producto</Button>
                                    {/* <Button onClick={(idGet)=>deleteProduct(idGet)}  variant="danger mx-2">Eliminar Producto</Button> */}
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                } 

            </div> 


        <section className="containerCards">
        <h3>Productos relacionados</h3>
        <div className="products">
          {/* <div className="product">
            {
              allProducts.map(art => (
                <Card key={art.id} style={{ width: '18rem', margin: '1rem' }}>
                  <div><span className="dto">{art.discount} % dto.</span></div>
                  <Card.Img variant="top" src={art.image} />
                  <Card.Body>
                    <Card.Title>{art.name}</Card.Title>
                    <Card.Text>
                      <p className="price">$ {art.price}/kg <span className="oldPrice">${Math.round(art.price * (art.discount / 100))}/kg</span></p>
                    </Card.Text>
                    <Button
                      
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
