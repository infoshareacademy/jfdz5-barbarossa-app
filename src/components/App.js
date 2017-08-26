import React from 'react'
import './App.css'

import {
    Row,
    Grid
} from 'react-bootstrap'

import Search from './map-items/Search.js'
import Menu from './map-items/Menu.js'
import Results from './map-items/Results.js'

const App = () => (
    <Grid>
        <Row>
            <Search/>
            <Menu/>
        </Row>
        <Row>
            <Results/>
        </Row>
    </Grid>
);

export default App;
