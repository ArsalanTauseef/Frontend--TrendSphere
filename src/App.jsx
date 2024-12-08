import { useState } from "react";
import "./App.css";
import { Header } from "./Components -- TrendSphere/Layout/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Components -- TrendSphere/Layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
