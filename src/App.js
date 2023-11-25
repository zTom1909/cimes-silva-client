import { Routes, Route, useLocation } from "react-router-dom";

import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import NoPage from "./components/NoPage";

import "./App.css";

const App = () => {
  const location = useLocation();
  const pageRoutes = ["/", "/about", "/contact", "/home"];
  const is404 = pageRoutes.includes(location.pathname);
  return (
    <>
      {is404 && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {is404 && <Footer />}
    </>
  );
};

export default App;
