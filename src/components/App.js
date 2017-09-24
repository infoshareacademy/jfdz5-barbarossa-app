import React from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results/Results'
import Map from './map-items/Map'

import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'

const App = () => (
    <div>
        <Map/>
        <Grid style={{ position: `relative`}}>
            <Row>
                <Col md={4}>
                    <Search />
                </Col>
                <Col mdOffset={2} md={6}>
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
        </Grid>
    </div>
);

export default App





