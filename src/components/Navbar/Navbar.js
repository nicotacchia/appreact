import react from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget.js/CartWidget';
import { GoThreeBars } from "react-icons/go";


const Navbar = () => {
    return (
      <nav className="conteiner">
       <div className="navBar">
         <img src={'./images/imgcircuito.jpg'} className="logo" alt='Logo'/>  
      
       <ul>
           <li><a href="a">Gimnasio</a></li>
           <li><a href="a">Deportes </a></li>
           <li><a href="a">Cardio</a></li>
           <CartWidget/>        
       </ul>
       </div>
      </nav>
    )
  }

  export default Navbar ;