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

    const handleShowOnMapClick = event => {
        const favName = event.currentTarget.getAttribute('data-fav-name');
        const selectedFav = favs.find( fav => fav.name === favName);
        showOnMapClick(selectedFav);
    }

    const handleRemoveFav = event => {
        const favName = event.currentTarget.getAttribute('data-fav-name');
        const selectedFav = favs.find( fav => fav.name === favName);

        let startStopName = selectedFav.startStop.name;
        startStopName = startStopName.replace('.','').replace(' ','');

        let endStopName = selectedFav.endStop.name;
        endStopName = endStopName.replace('.','').replace(' ','');

        const favNameToRemove = 'from_' + startStopName + '_to_' + endStopName   + '_by_' + favName;
        const userId = firebase.auth().currentUser.uid;

        firebase.database().ref('/favorites/' + userId + '/' + favNameToRemove).remove()
    }

    return (
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
            <td className="fav-buttons">
                <Button
                    className="btn-custom"
                    data-fav-name={name}
                    onClick={handleRemoveFav}
                >
                    <i className="fa fa-minus"/>
                </Button>
            </td>
            <td>
                <Button
                    className="btn-custom"
                    data-fav-name={name}
                    onClick={handleShowOnMapClick}
                >
                    <i className="fa fa-eye"/>
                </Button>
            </td>
        </tr>
    )
}