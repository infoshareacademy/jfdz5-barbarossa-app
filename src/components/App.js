import React from 'react'
import './App.css'
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results'

const App = () => (

            <div className="container">
                <Search />
                <Menu />
                <Results />
                <Content />
            </div>

);

export default App





