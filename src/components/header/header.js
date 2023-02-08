import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
    const [links, showLinks] = useState(false);

    if (window.innerWidth > 768) {
        useEffect(() => {
            showLinks(true);
        });
    }

    const linksList = links ? 
                    <div className='header__links header__links--active'>
                        <Link to={'/mercury'} onClick={() => {showLinks(false);}} className='header__link'>Mercury</Link>
                        <Link to={'/venus'} onClick={() => {showLinks(false);}} className='header__link'>Venus</Link>
                        <Link to={'/earth'} onClick={() => {showLinks(false);}} className='header__link'>Earth</Link>
                        <Link to={'/mars'} onClick={() => {showLinks(false);}} className='header__link'>Mars</Link>
                        <Link to={'/jupiter'} onClick={() => {showLinks(false);}} className='header__link'>Jupiter</Link>
                        <Link to={'/saturn'} onClick={() => {showLinks(false);}} className='header__link'>Saturn</Link>
                        <Link to={'/uranus'} onClick={() => {showLinks(false);}} className='header__link'>Uranus</Link>
                        <Link to={'/neptune'} onClick={() => {showLinks(false);}} className='header__link'>Neptune</Link>
                    </div> : 
                    null;

    return (
        <div className="header">
            <Link to={'/'} className='header__logo'>the planets</Link>
            <button className='header__burger' onClick={links ? () => {showLinks(false);} : () => {showLinks(true);}}></button>
            {linksList}
        </div>  
    );
};

export default Header;