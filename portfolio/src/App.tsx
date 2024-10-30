import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <div className="p-10">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
