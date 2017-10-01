import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'
import './Stops.css'


class Stops extends React.Component {

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
                <LinkContainer className="btn-exit" exact to="/">
                    <Button>
                        <i className="fa fa-times" />
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

                <LinkContainer className="btn-custom" exact to={`/stops/${this.state.stopId}`}>
                    <Button >
                        <span>SHOW</span>
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
)(Stops)