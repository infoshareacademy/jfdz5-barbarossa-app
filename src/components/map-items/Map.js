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

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class Map extends Component {

    state = {
        origin: new google.maps.LatLng(54.354161, 18.652906),
        destination: null,
        directions: null
    };

    componentWillReceiveProps(nextProps) {

        const DirectionsService = new google.maps.DirectionsService();
        const waypoints = nextProps.map.routeStops.map(
            stop => ({
                location: stop.name + ' ,Gdańsk'
            })
        )

        DirectionsService.route({
            origin: nextProps.map.startStop.name + ' ,Gdańsk',
            destination: nextProps.map.endStop.name + ' ,Gdańsk',
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
    map: state.map
});

export default connect(
    mapStateToProps
)(Map)