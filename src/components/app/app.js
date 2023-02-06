import React from 'react';
import Header from '../header/header';
// import MainPage from '../pages/mainPage';
import DetailPage from '../pages/detailPage';

import './app.scss';

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <DetailPage planet={'earth'}/>
        </div>
    );
};

export default App;