import { Routes, Route, Link } from "react-router-dom"
import { CategoriasCrear } from "../Categorias/CategoriasCrear"
import { CategoriasEditar } from "../Categorias/CategoriasEditar"
import { CategoriasListar } from "../Categorias/CategoriasListar"
import { EquiposCrear } from "../Equipos/EquiposCrear"
import { EquiposListar } from "../Equipos/EquiposListar"



export function Tablero(){

    return<div className="row">
        <div className="col-3">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/Tablero/CategoriasCrear"> Categorias</Link></li>
                <li><Link to="/Tablero/CategoriasListar"> Lista Categorias</Link></li>
                <li><Link to="/Tablero/CategoriasEditar"> Editar Categorias</Link></li>
                <li><Link to="/Tablero/EquiposCrear"> Equipos</Link></li>
                <li><Link to="/Tablero/EquiposListar"> Lista Equipos</Link></li>
            </ul>
        </div>

        <div className="col-9">
        <h2>Tabla Datos</h2>                
            <Routes>
                <Route path='/CategoriasCrear' element={<CategoriasCrear/>}></Route>
                <Route path='/CategoriasListar' element={<CategoriasListar/>}></Route>
                <Route path='/CategoriasEditar/:id' element={<CategoriasEditar/>}></Route>
                <Route path='/EquiposCrear' element={<EquiposCrear/>}></Route>
                <Route path='/EquiposListar' element={<EquiposListar/>}></Route>
            </Routes>
                
        </div>
     
    </div>
}