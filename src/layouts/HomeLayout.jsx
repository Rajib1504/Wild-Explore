import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../pages/Footer";
import Cards from "../pages/Cards";
import AboutUs from "../Components/AboutUs";
import Galary from "../Components/Galary";
import PracticeZone from "../Components/PracticeZone";
import PracticeText from "../Components/PracticeText";
import { useLocation } from "react-router-dom";

const HomeLayout = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Wild Explore  || Wild Explore";
    }
  }, [location]);
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
        <PracticeText></PracticeText>
        <PracticeZone></PracticeZone>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
