import React from 'react';
import Header from '../header/header';

import './mainPage.scss';

const MainPage = () => {
    return (
        <div className='main-page'>
            <Header/>
            <div className='main-page__img'></div>
            <div className='main-page__info'></div>
        </div>
    );
};

export default MainPage;