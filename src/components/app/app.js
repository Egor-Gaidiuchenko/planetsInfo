import React from 'react';
import Header from '../header/header';
import MainPage from '../pages/mainPage';
import DetailPage from '../pages/detailPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './app.scss';

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Header/>
                <Routes>
                    <Route exact path='/planetsInfo' element={<MainPage/>}/>
                    <Route exact path='/mercury' element={<DetailPage planet={'mercury'}/>}/>
                    <Route exact path='/venus' element={<DetailPage planet={'venus'}/>}/>
                    <Route exact path='/earth' element={<DetailPage planet={'earth'}/>}/>
                    <Route exact path='/mars' element={<DetailPage planet={'mars'}/>}/>
                    <Route exact path='/jupiter' element={<DetailPage planet={'jupiter'}/>}/>
                    <Route exact path='/saturn' element={<DetailPage planet={'saturn'}/>}/>
                    <Route exact path='/uranus' element={<DetailPage planet={'uranus'}/>}/>
                    <Route exact path='/neptune' element={<DetailPage planet={'neptune'}/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;