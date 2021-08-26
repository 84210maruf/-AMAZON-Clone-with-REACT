import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from "react";
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import "./Header.css";
import { useStateValue } from './StateProvider';


function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  
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
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">Hallow </span>
            <span className="header__optionLineTwo">{user ?'Sign Out':'Sign In'}</span>
          </div>
        </Link>
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
          <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
