import {Routes , Route} from "react-router-dom" ;
import Navbar from "./ShopApp/components/Navbar";
import Home from "./ShopApp/pages/Home";
import Cart from "./ShopApp/pages/Cart" ;

const App = () => {
  return (
  <div>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </div>)
};

export default App;
