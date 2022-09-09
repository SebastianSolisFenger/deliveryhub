import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/icons/cart.svg';
import foody from '../assets/images/foody.png';
import { useNavigate } from 'react-router-dom';
import Button from './elements/Button';
import { useState, useEffect } from 'react';

const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // LOG OUT

  const handleLogout = () => {
    sessionStorage.removeItem('Auth token');
    sessionStorage.removeItem('User Id');
    window.dispatchEvent(new Event('storage'));
    navigate('/');
  };

  // we want to use UseEffect in this case  becuase we wanto to listen to our SESSIONSTORTAGE TO KNOW IF THE USER IS STILL THERE when
  // ... they were logging in or registering

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem('Auth token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    // we add and event listener that is gonna listen to the storage and also FIRE this function
    //... if anything changes

    window.addEventListener('storage', checkAuthToken);

    // we also want to remove the event listener when the component is unmounted

    return () => {
      window.removeEventListener('storage', checkAuthToken);
    };
  }, []);

  return (
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img
              src={foody}
              alt="DeliveryHub"
              className="w-40 h-40 object-cover"
            />
          </Link>
        </div>

        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="/about" className="text-xl">
            About
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="mr-4 relative">
            <img src={cartIcon} alt="cart" />
            {cartCount > 0 ? (
              <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1  ">
                {cartCount}
              </div>
            ) : null}
          </Link>
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Log Out</Button>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
