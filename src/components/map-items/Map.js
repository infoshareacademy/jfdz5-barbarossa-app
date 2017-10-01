import './Map.css';
/* global google */
import {
    default as React,
    Component,
} from "react";
import {connect} from 'react-redux'

import {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} from "react-google-maps";

const DirectionsGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={10}
        defaultCenter={props.center}
    >
        {props.directions && <DirectionsRenderer directions={props.directions}/>}
    </GoogleMap>
));

const initialState = {
    origin: new google.maps.LatLng(54.354161, 18.652906),
    destination: null,
    directions: null
}

class Map extends Component {

    state = initialState;

    componentWillReceiveProps(nextProps) {

        if (nextProps.routeMap.id === undefined) {
            this.setState({
                directions: null
            });
        }
        else {
            const DirectionsService = new google.maps.DirectionsService();

            const {
                startStop,
                endStop,
                routeStops
            } = nextProps.routeMap;

            const waypoints = routeStops.map(
                stop => ({
                    location: stop.name +
                        (stop.name.includes('Chwaszczyno') || stop.name.includes('Banino') ?
                        '' : ' ,Gdańsk')
                })
            )

            DirectionsService.route({
                origin: startStop.name +
                    (startStop.name.includes('Chwaszczyno') || startStop.name.includes('Banino') ?
                    '' : ' ,Gdańsk'),
                destination: endStop.name +
                    (endStop.name.includes('Chwaszczyno') || endStop.name.includes('Banino') ?
                    '' : ' ,Gdańsk'),
                waypoints: waypoints,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    }

    render() {
        return (
                <div id="map">
                    <DirectionsGoogleMap
                        containerElement={
                            <div style={{height: `100%`, width: `100%`}}/>
                        }
                        mapElement={
                            <div style={{height: `100%`, width: `100%`}}/>
                        }
                        center={this.state.origin}
                        directions={this.state.directions}
                    />
                </div>
        )
    }
}

const mapStateToProps = state => ({
    routeMap: state.routeMap
});

export default connect(
    mapStateToProps
)(Map)