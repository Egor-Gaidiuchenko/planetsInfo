import React from 'react';

import './detailPage.scss';

const DetailPage = () => {
    const article = `Mercury is the smallest planet in the Solar System and the closest to the Sun. 
                    Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
                    It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the 
                    gods, and mediator between gods and mortals, corresponding to the Greek god Hermes. 
                    Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet; its 
                    apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity 
                    to the Sun means the planet can only be seen near the western horizon after sunset or the 
                    eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright 
                    star-like object, but is more difficult to observe than Venus. From Earth, the planet 
                    telescopically displays the complete range of phases, similar to Venus and the Moon, 
                    which recurs over its synodic period of approximately 116 days. Due to its synodic proximity to Earth, 
                    Mercury is most often the closest planet to Earth, with Venus periodically taking this role.`;

    return (
        <div className='detail-page'>
            <div className='detail-page__img'></div>
            <div className='detail-page__info'>
                <span className='detail-page__title'>mercury</span>
                {article}
            </div>
            <div className='detail-page__facts'>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>rotation time</span>
                    <span className='detail-page__fact-value'>23.9 days</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>revolution time</span>
                    <span className='detail-page__fact-value'>23.9 days</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>radius</span>
                    <span className='detail-page__fact-value'>23.9 km</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>average temperature</span>
                    <span className='detail-page__fact-value'>23.9 <span>&deg;</span>c</span>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;