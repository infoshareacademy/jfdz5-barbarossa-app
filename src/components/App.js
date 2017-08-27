import React from 'react'
import './App.css'
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results'
import Map from './map-items/Map'

import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'

const App = () => (

    <Grid>
        <Row>
            <Col md={6}>
                <Search />
            </Col>
            <Col md={6}>
                <Menu />
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Results />
            </Col>
            <Col md={6}>
                <Content />
            </Col>
        </Row>
        <Map/>
    </Grid>

);

export default App





