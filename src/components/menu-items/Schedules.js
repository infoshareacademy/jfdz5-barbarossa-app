import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
import './Stops.css'


class Schedules extends React.Component {

    state = {
        stopId: null
    }

    handleChange = event => {
        const selectedStop = this.props.stops.find(stop => stop.name === event.currentTarget.value)
        const selectedStopId = selectedStop.id
        this.setState({
            stopId: selectedStopId
        })
    }


    render() {


        return (
            <div className="main-panel menu-panel">
                <h1>Stops</h1>
                <LinkContainer exact to="/">
                    <Button>
                        X
                    </Button>
                </LinkContainer>
                <select className="stops" onChange={this.handleChange}>
                    {
                        this.props.stops.map(stop => stop.name).sort()
                            .map(
                                (name, index) => (
                                    <option key={index}>
                                        {
                                            name
                                        }
                                    </option>
                                )
                            )
                    }
                </select>

                <LinkContainer exact to={`/schedules/${this.state.stopId}`}>
                    <Button>
                        Show
                    </Button>
                </LinkContainer>
            </div>
        )
    }

}

export default connect(
    state => ({
        stops: state.stops
    })
)(Schedules)