import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'


const StopView = props => {
    const stopId = parseInt(props.match.params.stopId, 10);
    const linesWithStopIds = props.lines.filter(
        line => line.stops
            .find(
                stop => stop.id === stopId)
    );
    console.log(linesWithStopIds)

    return (
        <div>
            <h1> {stopId} </h1>
            <LinkContainer exact to="/stops">
                <Button>
                    <i className="fa fa-arrow-left"/>
                </Button>
            </LinkContainer>
            <h3>Departures lines:</h3>
            <ul>
                {
                    linesWithStopIds.map( line =>
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

    )

}

export default connect(
    state => ({
        stops: state.stops,
        lines: state.lines
    })
)(StopView)