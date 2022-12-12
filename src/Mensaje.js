export function Mensaje(){
    const evento={
        nombre: 'partidos',
        marcador1:2,
        marcador2:3
    }
    function msje(){
        return <h2>HOY SE JUEGA BRASIL VS ARGENTINA</h2>
    }

    function ganador(r1, r2){
        if (r1===r2)
            return <h3>Esto es un empate</h3>
            else
                if (r1>r2)
                    return <h3>Elequipo R1 es el ganador</h3>
                    else
                    return <h3>El ganador es R2</h3>
    }

    /*
    const texto = 'El numero de eqiuipos es: '
    const equipos = 20
*/

    return <div> 
        <h1>Bienvenidos a Scoreboardplay!!!</h1>
        <p>Ejemplo equipos</p>
        <p>{evento.nombre}</p>
        <h3>{evento.marcador1} - {evento.marcador2}</h3>
        {msje()}
        {ganador(evento.marcador1, evento.marcador2)}
        </div>
}

export function Registrados(){
    return <div>
        <ul>
            <li>Millonarios</li>
            <li>Nacional</li>
            <li>America</li>
            <li>Santa Fe</li>
            <li>Junior</li>

        </ul>


    </div>
}

/* Diferentes opciones de ver el mensaje renderizado

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<div>{Mensaje()}</div>)

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(Mensaje())
*/