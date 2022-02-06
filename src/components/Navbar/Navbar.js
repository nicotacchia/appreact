import './NavBar.css';

const Navbar = () => {
    return (
      <nav className="conteiner">
       <div className="navBar">
         <img src={'./images/imgcircuito.jpg'} className="logo" alt='Logo'/>  
       
       <ul>
           <li><a href="a">Gimnasio</a></li>
           <li><a href="a">Deportes </a></li>
           <li><a href="a">Cardio</a></li>
          
       </ul>
       </div>
      </nav>
    )
  }

  export default Navbar ;