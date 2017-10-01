import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Table, Button} from 'react-bootstrap'

import {getStopSchedule} from '../_utlis/getStopSchedule'

const ScheduleView = props => {
    const stopId = parseInt(props.match.params.stopId, 10);
    const stopDetails = props.stops.find(stop => stop.id === stopId);
    const stopSchedule = getStopSchedule(props.lines, stopId)

    return (
        stopDetails ?
            <div className="main-panel menu-panel">
                <h1> {stopDetails.name} </h1>
                <LinkContainer exact to="/stops">
                    <Button className="btn-back">
                        <i className="fa fa-arrow-left"/>
                    </Button>
                </LinkContainer>
                <Table>
                    <thead>
                    <tr>
                        <th>Line</th>
                        <th colSpan={5}>Departure times</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        stopSchedule.map(
                            line => (
                                <tr key={line.name}>
                                    <td> {line.name} </td>
                                    {
                                        line.timeFromSelectedStop.map(
                                            (time, index) => (
                                                <td key={index}>
                                                    {
                                                        time.hours + ':' + time.minutes
                                                    }
                                                </td>
                                            )
                                        )
                                    }
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </Table>
            </div>
            :
            <div className="main-panel menu-panel">
                Fetching data
            </div>

    )

}

export default connect(
    state => ({
        stops: state.stops,
        lines: state.lines
    })
)(ScheduleView)