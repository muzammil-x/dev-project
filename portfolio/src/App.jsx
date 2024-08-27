import React from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Offer from "./components/Offer";
import Facts from "./components/Facts";
import Edu from "./components/Edu";

const App = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#2E2E37] overflow-x-hidden ">
        <Banner />
        <Cards />
        <Offer />
        <Pricing />
        <Facts />
        <div className="bg-[#E2ECF6]">
          <Edu />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default App;
