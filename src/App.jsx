import React from "react";
import Navbar from "./componets/ui/nav/Navbar";
import Hero from "./componets/ui/hero/Hero";
import Cards from "./componets/ui/cards/Cards";
import Carsols from "./componets/ui/carsol/Carsols";
import Footer from "./componets/ui/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Carsols />
      <Footer />
    </div>
  );
}

export default App;
