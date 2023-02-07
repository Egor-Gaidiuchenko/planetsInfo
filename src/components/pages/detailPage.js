import React, {useState, useEffect} from 'react';
import {getAPIData, getData} from '../service/service';

import './detailPage.scss';

const DetailPage = (planetInfo) => {
    const planet = planetInfo.planet;

    const [rotationTime, setRotationTime] = useState(0);
    const [revolutionTime, setRevolutionTime] = useState(0);
    const [radius, setRadius] = useState(0);
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        getAPIData(planet)
            .then(data => {
                changeRotationTime(data.sideralRotation);
                changeRevolutionTime(data.sideralOrbit);
                changeRadius(data.equaRadius);
                changeTemperature(data.avgTemp);
            });
    });

    const changeRotationTime = (rotationTime) => {
        setRotationTime(rotationTime);
    };
    const changeRevolutionTime = (revolutionTime) => {
        setRevolutionTime(revolutionTime);
    };
    const changeRadius = (radius) => {
        setRadius(radius);
    };
    const changeTemperature = (temperature) => {
        setTemperature(temperature);
    };

    const [article, setArticle] = useState('');

    useEffect(() => {
        getData(planet)
            .then(data => {
                changeArticle(data.article);
            });
    });

    const changeArticle = (article) => {
        setArticle(article);
    };

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
                    <span className='detail-page__fact-value'>{Math.abs((rotationTime / 24).toFixed(1))} days</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>revolution time</span>
                    <span className='detail-page__fact-value'>{Math.abs(Math.round(revolutionTime))} days</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>radius</span>
                    <span className='detail-page__fact-value'>{Math.round(radius)} km</span>
                </div>
                <div className='detail-page__fact'>
                    <span className='detail-page__fact-title'>average temperature</span>
                    <span className='detail-page__fact-value'>{temperature - 273} <span>&deg;</span>c</span>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;