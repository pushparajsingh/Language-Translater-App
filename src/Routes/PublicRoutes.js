import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import { Routes, Route } from "react-router-dom";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
