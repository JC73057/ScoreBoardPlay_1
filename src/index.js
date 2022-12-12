import React from 'react'
import ReactDom from 'react-dom/client'
//import { Mensaje, Registrados } from './Mensaje'
import {Header, Menu} from './Element/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListaEventos } from './Eventos/listaEventos'
import { Tablero } from './dashboard/Tablero'
import { Login } from './Users/Login'
//import { Router } from 'express'
//import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { Evento } from './Eventos/Evento'
//import { Evento } from './Evento'
//import { Equipos } from './Equipos'
//import {Example} from './Example'
//import Registro from './Registro'



const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<div>
    
    <Header/>

    
    <Router>
    <Menu/>
        <div className='container'>
            <div className='row alig-center'>
                <div className='col m-5'>
                
                    <Routes>
                        <Route path='/Tablero/*' element={<Tablero/>}></Route>
                        <Route path='/ListaEventos' element={<ListaEventos/>}></Route>
                        <Route path='/Login' element={<Login/>}></Route>
                        
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
   
    

       
    </div>)

