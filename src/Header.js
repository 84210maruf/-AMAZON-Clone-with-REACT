import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";


function Header() {
  return (
    <div className="header">
      
      <Link to='/'>
        <img
          className="header__logo"
          src={require("./images/amazonlogo.png").default}
          alt="Amazon Logo"
        />
      </Link>

      <img
        className="header__logo1"
        src={require("./images/1562687-code-computer-creative-html-process-technology-web-development_107058.png").default}
      />

      <div className="header__search">
        <input className="haeder__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hallow</span>
          <span className="header__optionLineTwo"> Signin</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo"> & Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
        <Link to='/checkout'>
        <div className="header__optionBusket">
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
