import React from 'react'
import {Button} from 'react-bootstrap'

export const ResultItem = ({result, saveInFavsClick, showOnMapClick}) => {

    const {
        name,
        selectedTime: {timeFromStartStop, timeFromEndStop}
    } = result;

    const handleShowOnMapClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        showOnMapClick(resultName);
    }

    const handleSaveFavsClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        saveInFavsClick(resultName)
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
                        data-result-name={name}
                        onClick={handleSaveFavsClick}
                    >
                        <i className="fa fa-star-o"/>
                    </Button>
                </td>
                <td>
                    <Button
                        data-result-name={name}
                        onClick={handleShowOnMapClick}
                    >
                        <i className="fa fa-car"/>
                    </Button>
                </td>
            </tr>
    )
}