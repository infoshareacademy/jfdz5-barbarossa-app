import React from 'react'
import './Search.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {
    Grid,
    Row,
    Col,
    Button
} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';


const options = [
    {value: 'one', label: 'One', matchPos: "start"},
    {value: 'two', label: 'Two'},
    {value: 'three', label: 'Three'},
    {value: 'four', label: 'Four'},
];


class Search extends React.Component {

    state = {
        value: ""
    };

    logChange = (val) => this.setState({
        value: val
    });

    render() {
        return (
            <div className="search-container">
                <Grid className="search-box">
                        <Row>
                            <Col md={2}>
                                <div className="search-box_icon">
                                    <i className="fa fa-map-marker"/>
                                </div>
                            </Col>
                            <Col md={10}>
                                <Select
                                    name="form-field-name"
                                    value={this.state.value}
                                    options={options}
                                    onChange={this.logChange}
                                    placeholder="Start point..."
                                />
                            </Col>
                        </Row>
                </Grid>
                <Grid className="search-box">
                        <Row>
                            <Col md={2}>
                                <div className="search-box_icon">
                                    <i className="fa fa-flag"/>
                                </div>
                            </Col>
                            <Col md={10}>
                                <Select
                                    name="form-field-name"
                                    value={this.state.value}
                                    options={options}
                                    onChange={this.logChange}
                                    placeholder="Destination..."
                                />
                            </Col>
                        </Row>
                </Grid>
                <Grid className="search-box">
                        <Col md={4} mdOffset={8}>
                        <Button  bsStyle="primary" className="search-button">
                            <i className="fa fa-search"/>Search</Button>
                        </Col>
                </Grid>
            </div>
        )
    }

}

export default Search