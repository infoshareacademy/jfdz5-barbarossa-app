import React from 'react';
import './App.css';

import Search from './map-items/Search.js'
import Results from './map-items/Results.js'
import Menu from './map-items/Menu.js'

const App = () => (
    <div className="container">
        <div>
            <Search/>
            <Results/>
        </div>
        <div>
            <Menu/>
        </div>
    </div>

);

export default App;
