import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../pages/Footer";
import Cards from "../pages/Cards";
import AboutUs from "../Components/AboutUs";
import Galary from "../Components/Galary";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Cards></Cards>
        <Galary></Galary>
        <h1>reviews</h1>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
