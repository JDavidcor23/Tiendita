import {ENDPOINT_URL} from './Endpoint'

export const getProducts = async() => {

  const resp = await fetch(ENDPOINT_URL)
  const productos = await resp.json()
  
  return productos

}


