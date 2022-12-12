import '../CSS/bootstrap.min.css'
import { Link} from "react-router-dom"


export function Header(){
    return <div>
        <h1>Bienvenidos a la copa mundo</h1>
        </div>   
    
}

export function Menu(){
    return  <div>
    <nav className="navbar navbar-expand-lg bg-primary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/Tablero">Tablero</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ListaEventos">Lista de Eventos</Link>
          </li>  
        </ul>   

          <button className="btn btn-outline-success" aria-current="page" to="" type="submit">Search</button>
       
      </div>
    </div>
  </nav>
  </div>  
        
}

 
