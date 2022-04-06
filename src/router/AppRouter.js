// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Github from "../pages/github/Github";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Details from "../pages/details/Details";

const AppRouter = () => {
  // var [isNavbarHidden, setIsNavbarHidden] = useState(false);

  return (
    <Router>
      {/* {isNavbarHidden ? null : <Navbar />} */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/github" element={<Github />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
