import React from "react";
import Navbar from "../pages/Navbar";
import Banner from "../pages/Banner";
import Footer from "../pages/Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <h1>cards</h1>
        <h1>reviews</h1>
        <h1>photGalary</h1>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
