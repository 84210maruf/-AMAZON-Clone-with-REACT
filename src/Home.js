import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("./images/banner03.jpg").default}
          alt="Amazon Banner"
        />

        <div className="home__row">
          <Product 
          title={'Product Title'} 
          image={require('./images/product01.jpg').default} 
          price={19.9} 
          rating={5} 
          />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
        <Product />
        </div>
          
      </div>
    </div>
  );
}

export default Home;
