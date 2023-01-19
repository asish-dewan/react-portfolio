import React from "react";
import './App.css';
import NavBar from "./components/Navigation";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Header />

    <main>
    <About />
    <Projects />
    <Contact />
    </main>

    <ScrollToTop />
    <Footer />
</div>
  );
}

export default App;
