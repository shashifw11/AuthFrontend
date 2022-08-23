import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import "./Navbar.css"

export const Navbar = () => {
      
  return (
       <div style={{ background: "#1f80e0", padding: "10px", }} className="container-fluid">

          <Link to="/" style={{color : "white" , fontWeight: "bold" }} className="navbar-brand" >
            <img src="https://e-cart-aea99.web.app/images/logo.png" style={{height: "50px" }} />
            E-CART</Link>
            <Link to="/login"><Button style={{ marginTop: "10px", color: "white", border: "1px solid white"  , marginRight : "100px"}} variant="outlined" color="secondary">
              Login
           </Button></Link>
          
  
        </div>
    
      
    

  )
}