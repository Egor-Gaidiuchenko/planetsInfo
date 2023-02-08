import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
    const toggleLinks = () => {
        const links = document.querySelector('.header__links');

        links.classList.toggle('header__links--active');
    };

    const removeLinks = () => {
        if (window.innerWidth <= 768) {
            const links = document.querySelector('.header__links');

            links.classList.remove('header__links--active');
        }
    };

    return (
        <div className="header">
            <Link to={'/'} onClick={() => {removeLinks();}} className='header__logo'>the planets</Link>
            <button className='header__burger' onClick={() => {toggleLinks();}}></button>
            <div className='header__links header__links--active'>
                <Link to={'/mercury'} onClick={() => {removeLinks();}} className='header__link'>Mercury</Link>
                <Link to={'/venus'} onClick={() => {removeLinks();}} className='header__link'>Venus</Link>
                <Link to={'/earth'} onClick={() => {removeLinks();}} className='header__link'>Earth</Link>
                <Link to={'/mars'} onClick={() => {removeLinks();}} className='header__link'>Mars</Link>
                <Link to={'/jupiter'} onClick={() => {removeLinks();}} className='header__link'>Jupiter</Link>
                <Link to={'/saturn'} onClick={() => {removeLinks();}} className='header__link'>Saturn</Link>
                <Link to={'/uranus'} onClick={() => {removeLinks();}} className='header__link'>Uranus</Link>
                <Link to={'/neptune'} onClick={() => {removeLinks();}} className='header__link'>Neptune</Link>
            </div>
        </div>  
    );
};

export default Header;