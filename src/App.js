import logo from './logo.svg';
import { SignUP } from './components/Account/signup';
import {Route,Routes} from "react-router-dom"
import { Login } from './components/Account/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes> 
      <Route  path = "/" element = {<Login/>}/>
      <Route  path = "/signup" element = {<SignUP/>}/>
    </Routes>
    </div>
  );
}

export default App;
