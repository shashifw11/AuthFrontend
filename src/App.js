import logo from './logo.svg';
import { SignUP } from './components/Account/signup';
import {Route,Routes} from "react-router-dom"
import { Login } from './components/Account/login';
import './App.css';
import { Home } from './components/home/home';
import { Navbar } from './components/Navbar/Navbar';
import {useState} from "react" ; 

function App() {
  const [user , setUser] = useState(false) ;

     const handleUser = (data)=>{
         setUser(data)
     }
  return (
    <div className="App">
      <Routes> 
      <Route  path = "/login" element = {<Login handleUser= {handleUser} />}/>
      <Route  path = "/signup" element = {<SignUP/>}/>
      <Route  path = "/" element = {<Home user = {user}/>}/>
    </Routes>
    </div>
  );
}

export default App;
