import { useParams } from "react-router-dom"
import React,{useRef} from "react"
import { url } from "../Element/Constantes.js"
import swal from "sweetalert"


export function CategoriasEditar(){
    const refNombre=useRef(null)
    const {id, nombre}=useParams()
    console.log('el id es: '+ id)

    const HandleSubmit=()=>{
        console.log('Actualizando los datos')
        const categoria ={id,nombre:refNombre.current.value}
        const requestOptions={
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(categoria)
        }
        console.log(url+'/categorias/', +id)
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
         <h2>Editar</h2>
            <div className="container-fluid">
            <div className="row ">
                <div className="col-md-4 offset-4">
                <form  onSubmit={HandleSubmit}>
            <div className="mb-3">
                <label for="exampleInputname" className="form-label">Editar Categoría</label>
                <input type="text" className="form-control" id="exampleInputname" placeholder='Ingrese la nueva Categoria' aria-describedby="nombre Categoría" ref={refNombre}/>
               
            </div>          
            
            <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
            </div>
            </div>
    </div>
    </div>        
    
}