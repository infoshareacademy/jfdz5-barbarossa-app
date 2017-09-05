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
    departureStop: null,
    arrivalStop: null,
    departureChecked: false,
    arrivalChecked: true,
    time: moment(),
    typeOfTime: 'arrival',
    stops: null
}

class Search extends React.Component {

    state = initialState;

    options = [];

    handleDepartureChange = value => this.setState({
        departureStop: value
    });

    handleArrivalChange = value => this.setState({
        arrivalStop: value
    });

    handleTimeChange = value => {
        this.setState({
            time: value
        })
    }

    handleArrivalCheckboxClick = () => this.setState({
        arrivalChecked: true,
        departureChecked: false,
        typeOfTime: 'arrival'
    });

    handleDepartureCheckboxClick = () => this.setState({
        arrivalChecked: false,
        departureChecked: true,
        typeOfTime: 'departure'

    });

    handleSubmitClick = event => {
        event.preventDefault();

        if (this.state.departureStop && this.state.arrivalStop) {

            const searchParams = {
                departureStop:  this.state.departureStop.value,
                arrivalStop:    this.state.arrivalStop.value,
                time:           this.state.time.format('HH:mm'),
                typeOfTime:     this.state.typeOfTime
            };

            this.props.handleSubmitClick(searchParams);
            this.setState(initialState);
        }
    };

    render() {
        this.options = this.props.stopNames ? this.props.stopNames.map(
            stopName => ({
                value: stopName,
                label: stopName
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
                        value={this.state.departureStop}
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
                        value={this.state.arrivalStop}
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
    stopNames: state.stopNames
});

const mapDispatchToProps = dispatch => ({
    handleSubmitClick: (searchParams) => dispatch(search(searchParams))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)