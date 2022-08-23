import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./Navbar.css"

export const Navbar = ({user}) => {
      
  return (
       <div style={{ background: "#1f80e0", padding: "10px", }} className="container-fluid">

          <Link to="/" style={{color : "white" , fontWeight: "bold" }} className="navbar-brand" >
            <img src="https://e-cart-aea99.web.app/images/logo.png" style={{height: "50px" }} />
            E-CART</Link>
            <Link style = {{textDecoration : "none"}} to="/login"><Button id = "login_button"style={{ }} variant="outlined" >
              {user ? "Sign out" : "Login"}
           </Button></Link>
          
  
        </div>
    
      
    

  )
}