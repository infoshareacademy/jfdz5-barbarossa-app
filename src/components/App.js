import React from 'react'
import './App.css'
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results'
import Map from './map-items/Map'

import {
    Grid,
    Row
} from 'react-bootstrap'

const App = () => (

    <Grid>
        <Row>
            <Search/>
            <Menu/>
        </Row>
        <Results/>
        <Content/>
        <Map/>
    </Grid>

);

export default App





