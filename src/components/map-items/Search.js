import React from 'react'
import './Search.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {
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
                <form className="search-container">
                    <div className="search-box">
                        <div className="search-box_icon">
                            <i className="fa fa-map-marker"/>
                        </div>
                        <Select
                            name="form-field-name"
                            value={this.state.value}
                            options={options}
                            onChange={this.logChange}
                            placeholder="Start point..."
                            className="search-input"
                        />
                    </div>
                    <div className="search-box">
                        <div className="search-box_icon">
                            <i className="fa fa-flag"/>
                        </div>

                        <Select
                            name="form-field-name"
                            value={this.state.value}
                            options={options}
                            onChange={this.logChange}
                            placeholder="Destination..."
                            className="search-input"
                        />
                    </div>
                    <Button bsStyle="primary" className="search-button">
                        <i className="fa fa-search"/>Search</Button>
                </form>
        )
    }

}

export default Search