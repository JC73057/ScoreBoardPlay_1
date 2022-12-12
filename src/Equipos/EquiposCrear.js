import {url} from '../Element/Constantes'
import React,{useRef} from 'react'

export function EquiposCrear(){        
    const refNombre=useRef(null)
    const HandleSubmit=(ev)=>{
        ev.preventDefault()
        console.log('enviando datos')
        const requestOptions={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({nombre:refNombre.current.value})
        }
        fetch(url+"/Equipos/",requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('el error'+error))
    }        

    return <div>
            <h2>Crear Equipo</h2>
            <div className="container-fluid">
            <div className="row ">
                <div className="col-md-4 offset-4">
                <form  onSubmit={HandleSubmit}>
            <div className="mb-3">
                <label for="exampleInputname" className="form-label">Nombre Equipo</label>
                <input type="text" className="form-control" id="exampleInputname" placeholder='Ingrese Equipo' aria-describedby="nombre Categoría" ref={refNombre} />
               
            </div>          
            
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            </div>
            </div>
    </div>

    </div>
}