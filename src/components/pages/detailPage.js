import React, {useState} from 'react';
import {getData, getAPIData} from '../service/service';

import './detailPage.scss';

const DetailPage = (planetName) => {
    const planet = planetName.planet;

    const [article, changeArticle] = useState('');
    const [state, changeState] = useState({rotationTime: '', revolutionTime: '', radius: '', temperature: ''});
    
    function setState(planet) {
        getAPIData(planet)
            .then(data => changeState(
                {
                    rotationTime: Math.round(data.sideralRotation / 24), 
                    revolutionTime: Math.round(data.sideralOrbit), 
                    radius: Math.round(data.equaRadius), 
                    temperature: Math.round(data.avgTemp - 273)
                }
            ));
    }

    setState(planet);

    function setArticle() {
        getData(planet)
            .then(data => changeArticle(data.article));
    }

    setArticle(planet);

    const {rotationTime, revolutionTime, radius, temperature} = state;

    return (
        <div className='detail-page'>
            <div className='detail-page__img'>
                <img alt={planet} src={require(`./img/${planet}.png`)}></img>
            </div>
            <div className='detail-page__info'>
                <span className='detail-page__title'>{planet}</span>
                {article}
            </div>
            <div className='detail-page__facts'>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>rotation time</span>
                    <span className='detail-page__fact-value'>{rotationTime} days</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>revolution time</span>
                    <span className='detail-page__fact-value'>{revolutionTime} days</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>radius</span>
                    <span className='detail-page__fact-value'>{radius} km</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>average temperature</span>
                    <span className='detail-page__fact-value'>{temperature} <span>&deg;</span>c</span>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;