import React from "react";
import styled from "styled-components";
import HomePage from "./homePage";
import Navbar from "./navBar";
import "./App.css";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
