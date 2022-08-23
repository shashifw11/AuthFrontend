import { Navbar } from "../Navbar/Navbar"

export const Home = ({user})=>{
    return <div> 
            
           <Navbar/>
        <div style = {{textAlign :"center" , fontSize : "100px"}}>{user ? "WelCome To Home Page" : "Please Login your Account"}</div>
        </div> 
        
}