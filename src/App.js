import logo from './logo.svg';
import './App.css';
import {

  Routes,
  Route,

} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import {UserAuthContexProvider} from "./context/userAuthContex"
import Home from './components/Home';
import Protectedroute from './components/Protectedroute';

function App() {
  return (
    <div >
      <UserAuthContexProvider>
             <Routes>
         <Route path='/' element={<Login></Login>}></Route>
         <Route path='/signup' element={<Signup></Signup>}></Route>
         <Route path="/home" element={ <Protectedroute><Home></Home> </Protectedroute> }></Route>
       </Routes>
       </UserAuthContexProvider>

    </div>
  );
}

export default App;
