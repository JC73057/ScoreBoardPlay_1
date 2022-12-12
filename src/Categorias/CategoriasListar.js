import {url} from '../Element/Constantes'
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export function CategoriasListar(){
    const [categorias, setCategorias]=useState([])
    
    function cargar(){
        const requestOptions={
            method:'GET',
            headers:{'Content-Type':'application/json'}

        }

        fetch(url+"/Categorias/",requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data)
            setCategorias(data)
        })
        .catch(error => console.log('el error'+ error))        
}

useEffect(()=>{cargar()},[]) 

    return <div>
        <div>
            <Link to='/Tablero/CategoriasCrear' className='btn-btn-dark'>Nueva Categoria</Link>
        </div>
        <table className='table'>
            <thead>
                <tr> <th>Lista Categorias</th> </tr>
            </thead>
            <tbody>
                {
                categorias.map(dato=>(
                    <tr>
                        <td>
                            {dato.nombre}
                        </td>
                        <td>
                            <Link to={`/Tablero/CategoriasEditar/${dato._id}`}className='btn-btn-outline-success'>Editar</Link>
                        </td>
                        <td>
                        <Link to='/Tablero/CategoriasCrear' className='btn-btn-outline-red'>Eliminar</Link>
                        </td>
                    </tr>
                ))
                }      
            </tbody>             

        </table>


    </div>
}                                  