import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Cards from "./components/Cards";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Facts from "./components/Facts";

const App = () => {
  return (
    <>
      <Nav />
      <div className="bg-s[#2E2E37] overflow-x-hidden ">
        <Banner />
        <Cards />
        <Offer />
        <Pricing />
        <Facts />
        <Education />
        <Footer />
      </div>
    </>
  );
};
export default App;
