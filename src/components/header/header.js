import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link to={'/'} className='header__logo'>the planets</Link>
            <div className='header__links'>
                <Link to={'/mercury'} className='header__link'>Mercury</Link>
                <Link to={'/venus'} className='header__link'>Venus</Link>
                <Link to={'/earth'} className='header__link'>Earth</Link>
                <Link to={'/mars'} className='header__link'>Mars</Link>
                <Link to={'/jupiter'} className='header__link'>Jupiter</Link>
                <Link to={'/saturn'} className='header__link'>Saturn</Link>
                <Link to={'/uranus'} className='header__link'>Uranus</Link>
                <Link to={'/neptune'} className='header__link'>Neptune</Link>
            </div>
        </div>  
    );
};

export default Header;