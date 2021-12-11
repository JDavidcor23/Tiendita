import React, { useState } from 'react'
import { fileUpload } from '../helpers/fileUpload'
import axios from 'axios'
// import { ENDPOINT_URL } from '../helpers/Endpoint'
import { Form, Button } from 'react-bootstrap'

export const ManageProducts = () => {

    //ARRAY.sort((a, b) => a - b);

    const [producto, setProducto] = useState({
        id: '',
        name: "",
        price: '',
        category: "",
        popularity: '',
        image: ""
    },[])

    const { name, price, category, image } = producto;

    console.log(category, price);


    const handleFileChange = (evt) => {
        const file = evt.target.files[0]
        fileUpload(file)
            .then(res => producto.image = res)
            .catch(err => console.log(err))
    }

    const handleChanged = ({ target }) => {
        setProducto({
            ...producto,
            [target.name]: target.value
        })
    }

    const handleSubmit = (evt) => { //this hook its triggered by the onSubmit Event on the FORM head
        evt.preventDefault();
        alert('Árticulo agregado')
    }

    // const postData = () => { //this function its triggered by the onClick event (button send)
    //     axios.post(ENDPOINT_URL, producto)
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="containerForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control value={name} name="name" type="text" placeholder="Inserte nombre del producto" onChange={handleChanged} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Precio del producto</Form.Label>
                    <Form.Control value={price} name="price" type="number" placeholder="Inserte precio del producto" onChange={handleChanged} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Categoría del producto</Form.Label>
                    <Form.Select>
                        <option>Elige la categoía del producto</option>
                        <option value={category}>Vegetales</option>
                        <option value={category}>Productos</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Product Image Link</Form.Label>
                    <Form.Control value={image} name="image" type="file" onClick={()=> alert("Imagen agregada pero no muestra cambios")} onChange={handleFileChange} />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Button  variant="primary mx-2" type="submit">Subir producto</Button>
                {/* <Button onClick={() => postData()} variant="primary mx-2" type="submit">Subir producto</Button> */}
            </Form>
        </div>
    )
}