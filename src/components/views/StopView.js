import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'


const StopView = props => {
    const stopId = parseInt(props.match.params.stopId, 10);
    const stopDetails = props.stops.find(stop => stop.id === stopId);
    const linesWithStopIds = props.lines.filter(
        line => line.stops
            .find(
                stop => stop.id === stopId)
    );

    return (
        stopDetails ?
            <div className="main-panel menu-panel">
            <h1> {stopDetails.name} </h1>
                <LinkContainer className="btn-back" exact to="/stops">
                    <Button>
                        <i className="fa fa-arrow-left"/>
                    </Button>
                </LinkContainer>
                <LinkContainer className="btn-exit" exact to="/">
                    <Button>
                        <i className="fa fa-times"/>
                    </Button>
                </LinkContainer>
                <h3>Departures lines:</h3>
                <ul>
                    {
                        linesWithStopIds.map(line =>
                            (
                                <li key={line.name}>
                                    {
                                        line.name
                                    }
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            :
            <div className="main-panel menu-panel">
                <h1>Fetching data...</h1>
            </div>
    )

}

export default connect(
    state => ({
        stops: state.stops,
        lines: state.lines
    })
)(StopView)