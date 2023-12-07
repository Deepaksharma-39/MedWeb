import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";

const Home = lazy(() => import("./pages/home/Home"));

const Contact = lazy(() => import("./pages/other/Contact"));

const About = lazy(() => import("./pages/other/About"));

const Shop = lazy(() => import("./pages/shop/Shop"));

const Product = lazy(() => import("./pages/shop-product/Product"));

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="flone-preloader-wrapper">
              <div className="flone-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/shop"} element={<Shop />} />
            <Route path={"/shop/:id"} element={<Product />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
