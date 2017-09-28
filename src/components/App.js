import React from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';
import Content from './Content'
import Menu from './map-items/Menu'
import Search from './map-items/Search'
import Results from './map-items/Results/Results'
import Map from './map-items/Map'
import AuthSearch from './AuthSearch'

import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'

const App = () => (

    <Grid>
        <Row>
            <Col md={4}>
                <AuthSearch>
                    <Search/>
                </AuthSearch>
            </Col>
            <Col md={8}>
                <Menu/>
            </Col>
            <Col md={8}>
                <Content/>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Results/>
            </Col>
        </Row>
        <Map/>
    </Grid>

);

export default App





