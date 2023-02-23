import logo from "./logo.svg";
import "./App.css";
import Product from "./Components/Product";
import Products from "./Components/Products";
import Notfound from "./Components/Notfound";

import NavigationBar from "./Components/navbar";

import { BrowserRouter ,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/products" element={<Products />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
