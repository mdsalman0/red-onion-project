import { Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SingUp/SingUp'
import Header from './Pages/Shared/Header/Header';
import FoodDetails from './Pages/FoodDetails/FoodDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/reviews/:foodId'element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/login'element={<Login></Login>}></Route>
        <Route path='/singUp'element={<SingUp></SingUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
