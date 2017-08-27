import React from 'react'
import './App.css'
import Search from './map-items/Search.js'
import Menu from './map-items/Menu.js'
import Results from './map-items/Results.js'

const App = () => (

    <div className="container">
        <div className="row">

            <Search />
            <Menu />
        </div>
        <div className="row">
            <Results />
        </div>
    </div>

);

export default App;
