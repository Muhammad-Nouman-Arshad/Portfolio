// import React from 'react'
// import NavBar from './components/NavBar'
// import Home from './components/Home'
// import About from './components/About'
// import Portfolio from './components/Portfolio'
// import Experience from './components/Experience'
// import Footer from './components/Footer'
// import Contact from './components/Contact'

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <Home />
//       <About />
//       <Portfolio />
//       <Experience />
//       <Contact />
//       <Footer />
//     </>
//   )
// }

// export default App


import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/Portfolio";
import Experiance from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
