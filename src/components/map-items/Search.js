import React from 'react';
import './Search.css';
import {Button, Checkbox} from 'react-bootstrap';
import {connect} from 'react-redux'

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';

import {
    search
} from '../../state/search'

const initialState = {
    startStop: null,
    endStop: null,
    time: moment(),
    timeType: 'arrival',
    departureChecked: false,
    arrivalChecked: true
}

class Search extends React.Component {

    state = initialState;

    options = [];

    handleDepartureChange = value => this.setState({
        startStop: value
    });

    handleArrivalChange = value => this.setState({
        endStop: value
    });

    handleTimeChange = value => {
        this.setState({
            time: value
        })
    }

    handleArrivalCheckboxClick = () => this.setState({
        arrivalChecked: true,
        departureChecked: false,
        timeType: 'arrival'
    });

    handleDepartureCheckboxClick = () => this.setState({
        arrivalChecked: false,
        departureChecked: true,
        timeType: 'departure'

    });

    handleSubmitClick = event => {
        event.preventDefault();


        if (this.state.startStop && this.state.endStop) {

            const searchParams = {

                startStop: this.props.stops.find(stop => stop.name === this.state.startStop.value),
                endStop: this.props.stops.find(stop => stop.name === this.state.endStop.value),
                time: {
                    hour: parseInt(this.state.time.format('HH'), 10),
                    minutes: parseInt(this.state.time.format('mm'), 10),
                    seconds: 0,
                    type: this.state.timeType
                }

            };

            this.props.handleSubmitClick(searchParams);
            this.setState(initialState);
        }
    };

    render() {
        this.options = this.props.stops ? this.props.stops.sort().map(
            stop => stop.name)
            .map( stop => ({
                value: stop,
                label: stop
            })
        ) : null;

        return (
            <form className="search-container" onSubmit={this.handleSubmitClick}>
                <div className="search-box">
                    <div className="search-box_icon">
                        <i className="fa fa-map-marker"/>
                    </div>
                    <Select
                        name="departureStop"
                        value={this.state.startStop}
                        options={this.options}
                        onChange={this.handleDepartureChange}
                        placeholder="Start point..."
                        className="search-input"
                    />
                </div>
                <div className="search-box">
                    <div className="search-box_icon">
                        <i className="fa fa-flag"/>
                    </div>

                    <Select
                        name="arrivalStop"
                        value={this.state.endStop}
                        options={this.options}
                        onChange={this.handleArrivalChange}
                        placeholder="Destination..."
                        className="search-input"
                    />
                </div>
                <div className="search-box">
                    <div className="search-box_check">
                        <Checkbox
                            checked={this.state.arrivalChecked}
                            onChange={this.handleArrivalCheckboxClick}
                        >
                            Arrival
                        </Checkbox>
                        <Checkbox
                            checked={this.state.departureChecked}
                            onChange={this.handleDepartureCheckboxClick}
                        >
                            Departure
                        </Checkbox>
                    </div>
                    <TimePicker
                        name="time"
                        showSecond={false}
                        value={this.state.time}
                        onChange={this.handleTimeChange}
                        format={'HH:mm'}
                        className="search-time-input"
                    />
                    <Button
                        bsStyle="primary"
                        className="search-button"
                        type="submit"
                    >
                        <i className="fa fa-search"/>Search</Button>
                </div>
            </form>
        )
    }

}

const mapStateToProps = state => ({
    stops: state.stops
});

const mapDispatchToProps = dispatch => ({
    handleSubmitClick: (searchParams) => dispatch(search(searchParams))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)