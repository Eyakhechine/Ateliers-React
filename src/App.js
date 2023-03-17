import logo from "./logo.svg";
import React from "react";
import "./App.css";

import Product from "./Components/Product";

//import Products from "./Components/Products";
//import Notfound from "./Components/Notfound";
//import Productdetails from "./Components/ProductDetails";
import NavigationBar from "./Components/navbar";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ReduxComponent from "./Redux/ReduxComponent";
import ReduxToolkitComponent from "./ReduxToolkit/ReduxComponent";
const Products = React.lazy(() => import("./Components/Products"));
const Productdetails = React.lazy(() => import("./Components/ProductDetails"));
const AddProduct = React.lazy(() => import("./Components/AddProduct"));
const UpdateProduct = React.lazy(() => import("./Components/UpdateProduct"));
const Notfound = React.lazy(() => import("./Components/Notfound"));

function App() {
  return (
    <div>
      <NavigationBar />
      <Suspense fallback={<p>chargement...</p>}>
        <Routes>
          <Route path="/redux" element={<ReduxComponent />} />
          <Route path="/reduxtoolkit" element={<ReduxToolkitComponent />} />

          <Route path="/products" element={<Products />}></Route>
          <Route path="/:id" element={<Productdetails />}></Route>
          <Route path="/products/add" element={<AddProduct />}></Route>
          <Route path="/products/edit/:id" element={<UpdateProduct />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Suspense>
    </div>
   
  );
}

export default App;
