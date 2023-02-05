import React from 'react';
import Header from '../header/header';
// import MainPage from '../pages/mainPage';
import DetailPage from '../pages/detailPage';
import getData from '../service/service';

import './app.scss';

const App = () => {
    getData('terre').then(data => console.log(data));
    return (
        <div className='app'>
            <Header/>
            <DetailPage/>
        </div>
    );
};

export default App;