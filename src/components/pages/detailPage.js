import React, {useState, useEffect} from 'react';
import getData from '../service/service';
import articles from './articles.json';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './detailPage.scss';

const DetailPage = (planetInfo) => {
    const planet = planetInfo.planet;

    const [rotationTime, setRotationTime] = useState(0);
    const [revolutionTime, setRevolutionTime] = useState(0);
    const [radius, setRadius] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        getData(planet)
            .then(data => {
                changeRotationTime(data.sideralRotation);
                changeRevolutionTime(data.sideralOrbit);
                changeRadius(data.equaRadius);
                changeTemperature(data.avgTemp);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
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

    let article;

    for (let key in articles) {
        if (key === `${planet}`) {
            article = articles[key].article;
        }
    }

    if (error) {
        return <ErrorMessage/>;
    }

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
                    {
                        loading ? 
                        <Spinner/> : 
                        <>
                            <span className='detail-page__fact-title'>rotation time</span>
                            <span className='detail-page__fact-value'>{Math.abs((rotationTime / 24).toFixed(1))} days</span>
                        </>
                    }
                </div>
                <div className='detail-page__fact'>
                    {
                        loading ?
                        <Spinner/> :
                        <>
                            <span className='detail-page__fact-title'>revolution time</span>
                            <span className='detail-page__fact-value'>{Math.abs(Math.round(revolutionTime))} days</span>
                        </>
                    }
                </div>
                <div className='detail-page__fact'>
                    {
                        loading ?
                        <Spinner/> :
                        <>
                            <span className='detail-page__fact-title'>radius</span>
                            <span className='detail-page__fact-value'>{radius} km</span>
                        </>
                    }
                </div>
                <div className='detail-page__fact'>
                    {
                        loading ?
                        <Spinner/> :
                        <>
                            <span className='detail-page__fact-title'>average temperature</span>
                            <span className='detail-page__fact-value'>{temperature - 273} <span>&deg;</span>c</span>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default DetailPage;