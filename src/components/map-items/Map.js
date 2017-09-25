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
        defaultZoom={7}
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
        origin: null,
        destination: null,
        directions: null
    };

    componentWillReceiveProps(nextProps) {

        this.setState({
            origin: null,
            destination: null
        })


        const DirectionsService = new google.maps.DirectionsService();

        DirectionsService.route({
            origin: new google.maps.LatLng(
                100,100
            ),
            destination: new google.maps.LatLng(
                100,100
            ),
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
        );
    }
}

const mapStateToProps = state => ({
    map: state.map
});

export default connect(
    mapStateToProps
)(Map)