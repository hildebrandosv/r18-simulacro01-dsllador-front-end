import axios from 'axios';
import React, { useState } from 'react';
import { url } from '../helpers/url';
import { fileUpload } from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

  const [regTable, setRegTable] = useState({
    name: '',
    unit: '',
    price: '',
    most_popular: false,
    discount: '',
    url_image: ''
  })

  const { name, unit, price, most_popular, discount, url_image } = regTable;

  const postData = () => {
    axios.post(url, regTable)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))

  }

  const handleChanged = ({ target }) => {
    setRegTable({
      ...regTable,
      [target.name]: target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then(response => {
        regTable.url_image = response;
      }).catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <form id="formulario" onSubmit={handleSubmit}>
        <h2>Registro de Prouctos</h2>
        <hr />
        <div>
          <label>Nombre</label>
          <input id="" type="text" name="name" value={name} onChange={handleChanged} />
        </div>
        <div>
          <label>Unidad</label>
          <input id="" type="text" name="unit" value={unit} onChange={handleChanged} />
        </div>
        <div>
          <label>Precio</label>
          <input id="" type="number" name="price" value={price} onChange={handleChanged} />
        </div>
        <div>
          <label>Más Popular</label>
          <input id="" type="text" name="most_popular" value={most_popular} onChange={handleChanged} />
        </div>
        <div>
          <label>Descuento</label>
          <input id="" type="number" name="discount" value={discount} onChange={handleChanged} />
        </div>
        <div>
          <label>Imagen</label>
          <input id="botonImagen" type="file" name="url_image" value={url_image} onChange={handleFileChange} />
        </div>
        <div>
          <button onClick={() => postData()} id="btnRegistro">Enviar</button>
        </div>
      </form>
    </div>
  )
}
