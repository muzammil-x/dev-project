import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Cards from "./components/Cards";
import Education from "./components/Education";
import FunFacts from "./components/FunFacts";
import Footer from "./components/Footer";
import Offer from "./components/Offer";

const App = () => {
  return (
    <>
      <Nav />
      <div className="bg-s[#2E2E37] w-full h-screen ">
        <Banner />
        <Cards />
        <Pricing />
        <Education />
        <FunFacts />
        <Offer />
        <Footer />
      </div>
    </>
  );
};
export default App;
