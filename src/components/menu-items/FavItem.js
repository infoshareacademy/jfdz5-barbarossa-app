import React from 'react'
import {Button} from 'react-bootstrap'

export const FavItem = ({fav, favs, showOnMapClick, updateFavs}) => {

    const {
        name,
        selectedTime: {timeFromStartStop, timeFromEndStop},
        startStop,
        endStop
    } = fav;

    const handleShowOnMapClick = event => {
        const favName = event.currentTarget.getAttribute('data-result-name');
        const selectedFav = favs.find( fav => fav.name === favName);
        showOnMapClick(selectedFav);
    }

    const handleRemoveFav = event => {
        const favName = event.currentTarget.getAttribute('data-result-name');
        const selectedFav = favs.find( fav => fav.name === favName);
    }

    return (
        <tr>
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
            <td>
                <Button
                    data-fav-name={name}
                    onClick={handleRemoveFav}
                >
                    <i className="fa fa-minus"/>
                </Button>
            </td>
            <td>
                <Button
                    data-fav-name={name}
                    onClick={handleShowOnMapClick}
                >
                    <i className="fa fa-car"/>
                </Button>
            </td>
        </tr>
    )
}