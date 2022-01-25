
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



export const NavBar =  () =>{

    return (
        <header className ="header">

            <h1>LOGO</h1>

            <nav className="header-nav" >
                <p className="header-link"> Enlace 1</p>
                <p className="header-link"> Enlace 2</p>
                <p className="header-link"> Enlace 3</p>
                <FontAwesomeIcon className="icono"   icon={faShoppingCart} />
                
            </nav>


        </header>


    )


}