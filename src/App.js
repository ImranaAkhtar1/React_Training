import "./App.css";
import "./Style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navigation from "./Pages/navigation";
import Home from "./Pages/homepage";
import ProductDetails from "./Pages/productDetails";
import ProductListing from "./Pages/ProductListing";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="productDetails" element={<ProductDetails />} />
            <Route path="productListing" element={<ProductListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
