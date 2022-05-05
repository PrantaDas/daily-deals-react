import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
