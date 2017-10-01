import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'


const LineView = props => {
    const lineName = props.match.params.lineName
    const selectedLine = props.lines.find(line => line.name === lineName);

    return (
        selectedLine ?
            <div className="main-panel menu-panel lines">
            <h1> {lineName} </h1>
                <LinkContainer className="btn-back" exact to="/lines">
                    <Button >
                        <i className="fa fa-arrow-left"/>
                    </Button>
                </LinkContainer>
                <LinkContainer className="btn-exit" exact to="/">
                    <Button >
                        <i className="fa fa-times"/>
                    </Button>
                </LinkContainer>
                <h3>Route:</h3>
                <i className="fa fa-long-arrow-right"/>
                <i className="fa fa-arrow-down"/>
                <ul>
                    {
                        selectedLine.stops.map(
                            (stop,index) =>
                            (
                                <li className="lines-test" key={index}>
                                    {
                                        stop.name
                                    }
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            :
            <div className="main-panel menu-panel">
                Fetching data...
            </div>
    )

}

export default connect(
    state => ({
        lines: state.lines
    })
)(LineView)