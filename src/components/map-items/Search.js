import React from 'react';
import './Search.css';
import 'font-awesome/css/font-awesome.min.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import {Button, Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux'

import {
    search
} from '../../state/search'

const format = 'HH:mm';

function onChange(value) {
    value.format(format);
}

class Search extends React.Component {

    state = {
        startValue: "",
        destinationValue: "",
        arrivalChecked: true,
        departureChecked: false,
        stops: null
    };

    options = [];

    startLogChange = value => this.setState({
        startValue: value
    });

    destinationLogChange = value => this.setState({
        destinationValue: value
    });

    handleArrivalCheckboxClick = () => this.setState({
        arrivalChecked: true,
        departureChecked: false
    });

    handleDepartureCheckboxClick = () => this.setState({
        arrivalChecked: false,
        departureChecked: true
    });

    handleSubmitClick = () => {
        this.props.handleSubmitClick(this.state.startValue.value, this.state.destinationValue.value)
    }

    componentWillMount() {
        fetch(
            'http://localhost:3000/data/stops.json'
        ).then(
            response => response.json()
        ).then(
            data => {
                this.setState({
                    stops: data
                })
            }
        )
    }


    render() {
        this.options = this.state.stops ? this.state.stops.map(
            stop => ({
                value: stop.name,
                label: stop.name
            })
        ) : null;

        return (
            <form className="search-container">
                <div className="search-box">
                    <div className="search-box_icon">
                        <i className="fa fa-map-marker"/>
                    </div>
                    <Select
                        name="form-field-name"
                        value={this.state.startValue}
                        options={this.options}
                        onChange={this.startLogChange}
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
                        value={this.state.destinationValue}
                        options={this.options}
                        onChange={this.destinationLogChange}
                        placeholder="Destination..."
                        className="search-input"
                    />
                </div>
                <div className="search-box search-box__center">
                    <div className="search-box_check">
                        <Checkbox
                            checked={this.state.arrivalChecked}
                            onChange={this.handleArrivalCheckboxClick}
                        >
                            Time of arrival
                        </Checkbox>
                        <Checkbox
                            checked={this.state.departureChecked}
                            onChange={this.handleDepartureCheckboxClick}
                        >
                            Time of departure
                        </Checkbox>
                    </div>
                    <TimePicker
                        showSecond={false}
                        defaultValue={moment()}
                        onChange={onChange}
                        format={format}
                        className="search-time-input"
                    />
                    <Button
                        bsStyle="primary"
                        className="search-button"
                        onClick={this.handleSubmitClick}
                    >
                        <i className="fa fa-search"/>Search</Button>
                </div>
            </form>
        )
    }

}

const mapStateToProps = state => ({
    departureStop: state.search.departureStop,
    arrivalStop: state.search.arrivalStop,
})

const mapDispatchToProps = dispatch => ({
    handleSubmitClick: (startValue,destinationValue) => dispatch(search(startValue,destinationValue))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)