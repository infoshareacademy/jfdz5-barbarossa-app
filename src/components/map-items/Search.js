import React from 'react';
import './Search.css';
import 'font-awesome/css/font-awesome.min.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import {Button} from 'react-bootstrap';

const format = 'HH:mm';

function onChange(value) {
    value.format(format);
}

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
                <div className="search-box search-box__inverse">
                    <TimePicker
                        showSecond={false}
                        defaultValue={moment()}
                        onChange={onChange}
                        format={format}
                        className="search-time-input"
                    />
                    <Button bsStyle="primary" className="search-button">
                        <i className="fa fa-search"/>Search</Button>
                </div>
            </form>
        )
    }

}

export default Search