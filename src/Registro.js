import './CSS/estiloRegistro.css'

export function Registro(){
    return <div>

    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Crear una Cuenta</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <span>o usa tu correo para registrarte</span>
                <input type="text" placeholder="Nombre" />
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <button>Registrar</button>
            </form>
        </div>
        <div class="form-container log-in-container">
            <form action="#">
                <h1>Ingresar</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-google"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="social"><i class="fa-brands fa-tiktok"></i></a>
                </div>
                <span>Ingresa con tu cuenta</span>
                <input type="email" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <a href="#">Olvidaste la Contraseña?</a>
                <button>Log In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Bienvenido ScoreBoardPlay!</h1>
                    <p>Ya tienes una cuenta? Log In</p>
                    <button class="ghost" id="logIn">Registrar</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>ScoreBoardPlay!</h1>
                    <p>No tienes una cuenta? Registrate gratis aqui</p>
                    <button class="ghost" id="signUp">Registrar</button>
                </div>
            </div>
        </div>
    </div>   
    </div>
}
