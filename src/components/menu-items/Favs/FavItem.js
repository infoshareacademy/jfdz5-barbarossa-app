import React from 'react'
import firebase from 'firebase'
import {Button} from 'react-bootstrap'

import './Favs.css'

export const FavItem = ({fav, favs, showOnMapClick}) => {

    const {
        name,
        selectedTime: {timeFromStartStop, timeFromEndStop},
        startStop,
        endStop
    } = fav;

    let startStopName = fav.startStop.name;
    startStopName = startStopName.replace('.','').replace(' ','');

    let endStopName = fav.endStop.name;
    endStopName = endStopName.replace('.','').replace(' ','');

    const startStopTime = timeFromStartStop.hours + ':' + timeFromStartStop.minutes
    const endStopTime = timeFromEndStop.hours + ':' + timeFromEndStop.minutes

    const favName = 'from_' + startStopName + '_at_' + startStopTime + '_to_' + endStopName + '_at_' + endStopTime + '_by_' + name;

    const handleShowOnMapClick = event => {
        const favName = event.currentTarget.getAttribute('data-fav-name');
        const selectedFav = favs.find( fav => fav.name === favName);
        showOnMapClick(selectedFav);
    }

    const handleRemoveFav = event => {
        const favName = event.currentTarget.getAttribute('data-fav-name');

        const userId = firebase.auth().currentUser.uid;

        firebase.database().ref('/favorites/' + userId + '/' + favName).remove()
    }

    return (
        <tbody>
        <tr className="fav-table">
            <td>
                {
                    name
                }
            </td>
            <td>
                {
                    startStop.name
                }
            </td>
            <td>
                {
                    timeFromStartStop.hours + ':' + timeFromStartStop.minutes
                }
            </td>
            <td>
                {
                    endStop.name
                }
            </td>
            <td>
                {
                    timeFromEndStop.hours + ':' + timeFromEndStop.minutes
                }
            </td>
        </tr>
        <tr className="fav-buttons">
            <td>
                <Button
                    className="btn-custom"
                    data-fav-name={favName}
                    onClick={handleRemoveFav}
                >
                    <i className="fa fa-minus"/>
                </Button>
            </td>
            <td>
                <Button
                    className="btn-custom"
                    data-fav-name={favName}
                    onClick={handleShowOnMapClick}
                >
                    <i className="fa fa-eye"/>
                </Button>
            </td>
        </tr>
        </tbody>
    )
}