import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../helpers/url';
import '../styles/List.css';

export const List = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        axios.delete(url + id)
            .then(response => {
                getData();
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log(registro)
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Unidad</th>
                        <th>Precio</th>
                        <th>Popular</th>
                        <th>Descuento</th>
                        <th>Imagen</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        registro.map(r => (
                            <tr key={r.id}>
                                <td>{r.name}</td>
                                <td>{r.unit}</td>
                                <td>{r.price}</td>
                                <td>{r.most_popular}</td>
                                <td>{r.discount}</td>
                                <td><img src={r.url_image} width="40" height="50" alt="" /></td>
                                <td><button onClick={() => deleteData(r.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
