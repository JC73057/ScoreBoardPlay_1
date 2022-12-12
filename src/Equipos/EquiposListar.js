import {url} from '../Element/Constantes'
import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export function EquiposListar(){
    const [equipos, setEquipos]=useState([]) 
    
    function cargar(){
        const requestOptions={
            method:'GET',
            headers:{'Content-Type':'application/json;charset=utf-8'}
        }

        fetch(url+"/Equipos/",requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data)
            setEquipos(data)
        })
        .catch(error => console.log('el error'+error))        
    }

    useEffect(()=>{cargar()},[]) 

    return <div>
        <div>
            <Link to='/Tablero/EquiposCrear' className='btn-btn-outline-success'>Ingrese Equipo</Link>
        </div>
        <table className='table'>
            <thead>
                <tr> <th>Lista Equipos</th> </tr>
            </thead>
            <tbody>
                {
                equipos.map(dato=>(
                    <tr>
                        <td>
                            {dato.nombre}
                        </td>
                        <td>
                            <Link to={`/Tablero/EquiposEditar/${dato._id}`}className='btn-btn-outline-dark'>Editar</Link>
                        </td>
                        <td>
                        <Link to='/Tablero/EquiposCrear' className='btn-btn-red'>Eliminar</Link>
                        </td>
                    </tr>
                ))
                }      
            </tbody>   
            

        </table>


    </div>
}                                  