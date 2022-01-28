import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export const CartWidget = ()=>{

return(
    <header className ="header">
        

        <nav className="header-nav" >

        <FontAwesomeIcon className="icono"   icon={faShoppingCart} />
        </nav>



    </header>


);

}