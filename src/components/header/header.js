import React from 'react';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className='header__logo'>
                the planets
            </div>
            <div className='header__links'>
                <a className='header__link' href='#'>Mercury</a>
                <a className='header__link' href='#'>Venus</a>
                <a className='header__link' href='#'>Earth</a>
                <a className='header__link' href='#'>Mars</a>
                <a className='header__link' href='#'>Jupiter</a>
                <a className='header__link' href='#'>Saturn</a>
                <a className='header__link' href='#'>Uranus</a>
                <a className='header__link' href='#'>Neptune</a>
            </div>
        </div>  
    );
};

export default Header;