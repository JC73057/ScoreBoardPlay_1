import {url} from '../Element/Constantes'
import React,{useRef} from 'react'
import swal from 'sweetalert'

export function CategoriasCrear(){        
    const refNombre=useRef(null)
    const HandleSubmit=(ev)=>{
        ev.preventDefault()
        console.log('enviando datos')
        const requestOptions={
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({nombre:refNombre.current.value})
        }
        fetch(url+"/categorias/",requestOptions)
        .then(response => response.json())
        .then(data => {console.log(data)
        //Si el campo esta vacio
        if (refNombre.current.value ===""){
            swal({
                title: 'Validando datos',
                text: data.msj,
                icon: 'warning'
                })
        }
        else
            swal({
                title: 'Categoria Guardada',
                text: data.msj,
                icon: 'success'
                })        
        
        })
        .catch(error =>{console.log('el error'+error)
            swal({
                title: 'Error',
                text: 'Errror en la plataforma',
                icon: 'error'
                })
            })
    }        

    return <div>
            <h2>Crear Categorias</h2>
            <div className="container-fluid">
            <div className="row ">
                <div className="col-md-4 offset-4">
                <form  onSubmit={HandleSubmit}>
            <div className="mb-3">
                <label for="exampleInputname" className="form-label">Nombre Categoría</label>
                <input type="text" className="form-control" id="exampleInputname" placeholder='Ingrese la Categoria' aria-describedby="nombre Categoría" ref={refNombre} />
               
            </div>          
            
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            </div>
            </div>
    </div>

    </div>
}