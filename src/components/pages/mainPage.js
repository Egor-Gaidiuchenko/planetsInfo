import React from 'react';

import './mainPage.scss';

const MainPage = () => {
    const info = `The Solar System is the gravitationally bound system of the Sun 
                  and the objects that orbit it. It formed 4.6 billion years ago 
                  from the gravitational collapse of a giant interstellar molecular 
                  cloud. The vast majority (99.86%) of the system's mass is in the 
                  Sun, with most of the remaining mass contained in the planet Jupiter. 
                  The four inner system planets — Mercury, Venus, Earth and Mars — are terrestrial 
                  planets, being composed primarily of rock and metal. The four giant planets 
                  of the outer system are substantially larger and more massive than the terrestrials. 
                  The two largest, Jupiter and Saturn, are gas giants, being composed mainly of 
                  hydrogen and helium. The next two, Uranus and Neptune, are ice giants, being 
                  composed mostly of volatile substances with relatively high melting points 
                  compared with hydrogen and helium, such as water, ammonia, and methane.`;
    return (
        <div className='main-page'>
            <div className='main-page__img'></div>
            <div className='main-page__info'>
                <span className='main-page__title'>solar system</span>
                {info}
            </div>
        </div>
    );
};

export default MainPage;