import React from 'react'
import './App.css'
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results'
import Map from './map-items/Map'
import {Route} from 'react-router-dom'

const App = () => (

            <div>
                <Search />
                <Menu />
                <Results />
                <Content />
                <Route path="/map" component={Map}/>
            </div>

);

export default App





