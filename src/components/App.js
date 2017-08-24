import React from 'react';
import './App.css';

import Search from './map-items/Search.js'
import Results from './map-items/Results.js'
import Menu from './map-items/Menu.js'
import Map from './map-items/Map.js'

const App = () => (
    <div className="container">
        <div>
            <Search/>
            <Results/>
        </div>
        <div>
            <Menu/>
            <Map/>
        </div>
    </div>

);

export default App;
