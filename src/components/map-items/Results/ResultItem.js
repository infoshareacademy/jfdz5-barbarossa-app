import React from 'react'
import {Button} from 'react-bootstrap'
import firebase from'firebase'

export const ResultItem = ({result, results, showOnMapClick}) => {

    const {
        name,
        selectedTime: {timeFromStartStop, timeFromEndStop}
    } = result;

    const handleShowOnMapClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        const selectedResult = results.find( result => result.name === resultName);
        showOnMapClick(selectedResult);
    }

    const handleSaveFavsClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        const selectedResult = results.find( result => result.name === resultName);

        let startStopName = selectedResult.startStop.name;
        startStopName = startStopName.replace('.','').replace(' ','');

        let endStopName = selectedResult.endStop.name;
        endStopName = endStopName.replace('.','').replace(' ','');

        const startStopTime = selectedResult.selectedTime.timeFromStartStop.hours + ':' + selectedResult.selectedTime.timeFromStartStop.minutes
        const endStopTime = selectedResult.selectedTime.timeFromEndStop.hours + ':' + selectedResult.selectedTime.timeFromEndStop.minutes

        const favName = 'from_' + startStopName + '_at_' + startStopTime + '_to_' + endStopName + '_at_' + endStopTime + '_by_' + resultName;
        const userId = firebase.auth().currentUser.uid;

        firebase.database().ref('/favorites/' + userId + '/' + favName).set(selectedResult)
    }

    return (
            <tr className="delete-favorite-buttons">
                <td>
                    {
                        name
                    }
                </td>
                <td>
                    {
                        timeFromStartStop.hours + ':' + timeFromStartStop.minutes
                    }
                </td>
                <td>
                    {
                        timeFromEndStop.hours + ':' + timeFromEndStop.minutes
                    }
                </td>
                <td>
                    <Button
                        className="btn-custom btn-star"
                        data-result-name={name}
                        onClick={handleSaveFavsClick}
                    >
                        <i className="fa fa-star-o"/>
                    </Button>
                </td>
                <td>
                    <Button
                        className="btn-custom btn-car"
                        data-result-name={name}
                        onClick={handleShowOnMapClick}
                    >
                        <i className="fa fa-eye"/>
                    </Button>
                </td>
            </tr>
    )
}