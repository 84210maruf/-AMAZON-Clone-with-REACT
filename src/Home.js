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
          id='10'
          title={'Product title from props'} 
          image={require('./images/product01.jpg').default} 
          price={19.9} 
          rating={5} 
          />
          <Product 
          id='20'
          title={'Product Title lorem ipsum lorem ipsum lorem ipsum lorem ipsum'} 
          image={require('./images/product02.png').default} 
          price={19.9} 
          rating={5} 
          />
        </div>

        <div className="home__row">
          <Product 
          id='30'
          title={'Product Title  lorem ipsum lorem ipsum lorem ipsum lorem ipsum'} 
          image={require('./images/product03.jpg').default} 
          price={19.9} 
          rating={5} 
          />
          <Product 
          id='40'
          title={'Product Title  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'} 
          image={require('./images/product05.jpeg').default} 
          price={19.9} 
          rating={5} 
          />
          <Product 
          id='50'
          title={'Product Title  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'} 
          image={require('./images/product01.jpg').default} 
          price={19.9} 
          rating={5} 
          />
        </div>

        <div className="home__row">
          <Product 
          id='60'
          title={'Product Title'} 
          image={require('./images/product06.jpg').default} 
          price={19.9} 
          rating={5} 
          />
        </div>
          
      </div>
    </div>
  );
}

export default Home;
