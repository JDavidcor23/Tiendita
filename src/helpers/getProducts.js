//helpers: Van funciones especificas



export const getProducts = async() => {
  const url = 'https://tiendita-workshop-2.herokuapp.com/productos'
  const resp = await fetch(url)
  const productos = await resp.json()
  // console.log(url)
  // console.log(productos)

  //recorridod e la data
  const products = productos.map(art =>{
      return{
        id:art.id,
        name:art.name,
        price:art.price,
        category:art.category,
        discount:art.discount,
        ripeness:art.ripeness,
        popularity:art.popularity,
        image:art.image

      }
  })
//  console.log(products)
  return products

}



