import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from '../utils/Context';
import { TOGGLE_THEME } from '../reducers/reducer';
import Sun from '../assets/Sun.svg';
import Moon from '../assets/Moon.svg';
import DHico from '../assets/DH.ico'

const Navbar = () => {
  const { state, dispatch } = useContext();

  const routes = [
    { path: '/home', name: 'Home' },
    { path: '/favs', name: 'Favs' },
    { path: '/contacto', name: 'Contact' },
  ]

  const handleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  }
  return (
    <nav className='navbar'>
      <div className='icono-DH'>
      <img src={DHico}></img>
      <p>DH Odonto</p>
      </div>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <button className='btn-theme' onClick={handleTheme}><img src={state.theme === 'light' ? Moon : Sun}></img></button>
    </nav>
  );
};

export default Navbar;