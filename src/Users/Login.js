

export function Login (){
    const presboton = function(){console.log("Presionando boton!!")}
    const probandoSubmit = (ev)=>{
        ev.preventDefault()
        console.log('enviando datos'+ev)}

    return <div className="container-fluid">
        <div className="row">
        <div className="col-md-4 offset-5">
        <form onSubmit={probandoSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Ingrese su e-mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={"escribir"}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else. / Nunca compartiremos su correo con nadie mas.
                </div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={presboton}>Submit</button>
        </form>
        </div>
        </div>

    </div>

}