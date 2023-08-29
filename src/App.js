import {
  Routes, 
  Route,
  NavLink,
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import Home from "./pages/home/Home";
import Product from "./pages/product/PrOv";
import ProductLayout from "./layouts/ProductLayout";
import UIKits from "./pages/product/UIKits";
import Error from "./pages/Error";
import Undone from "./pages/Undone";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={ <RootLayout /> } errorElement={<Error />}>
        <Route index element={ <Home /> }></Route>
        <Route path="pro" element={ <ProductLayout /> }>
          <Route index element={ <Product /> }></Route>
          <Route path="ui-kits" element={ <UIKits /> }></Route>
          <Route path="chat-sdks-api" element={ <Undone /> }></Route>
          <Route path="extensions" element={ <Undone /> }></Route>
        </Route>
        <Route path="page-developing" element={ <Undone /> }></Route>
      </Route>
  )
);


function App() {
  return (
    <RouterProvider router = { router } />
  );
}

export default App
