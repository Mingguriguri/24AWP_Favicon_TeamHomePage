import React from "react";
import { InitFont } from "./InitFont.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import TeamMember from "./pages/TeamMember";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <>
        <InitFont />
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/teamMember/*"
            element={<TeamMember></TeamMember>}
          ></Route>
          <Route
            path="/introduction"
            element={<Introduction></Introduction>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
