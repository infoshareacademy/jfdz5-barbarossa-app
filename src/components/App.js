import React from 'react'
import './App.css'
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results'
import Map from './map-items/Map'

const App = () => (

            <div className="container">
                <Search />
                <Menu />
                <Results />
                <Content />
                <Map />
            </div>

);

export default App





