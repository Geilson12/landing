import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FloatingElements } from "./components/FloatingElements";

function App() {
  return (
    <div className="App relative min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingElements />
      <Header />
      <Hero />
    </div>
  );
}

export default App;