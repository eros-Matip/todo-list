import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Body />
      <Footer method={"React"} school={"Le Reacteur"} name={"Eros"} />
    </div>
  );
}

export default App;
