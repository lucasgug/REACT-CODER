import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import './styles.css'


  function App() {

      return(
          <>
            <NavBar/>
            <ItemListContainer  greeting ="Hola Coder!" / >
          </>

      );
  }

  export default App;
  