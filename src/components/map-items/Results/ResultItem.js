import React from 'react'
import {Button} from 'react-bootstrap'

export const ResultItem = ({result, results, saveClick, showClick}) => {

    const handleShowClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        const selectedResult = results.find(result => result.name === resultName);

        showClick(selectedResult);
    }

    const handleSaveClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        const selectedResult = results.find(result => result.name === resultName);

        saveClick(selectedResult)
    }

    return (
            <tr>
                <td>
                    {
                        result.name
                    }
                </td>
                <td>
                    {
                        result.selectedTime.timeFromStartStop.hours + ':' + result.selectedTime.timeFromStartStop.minutes
                    }
                </td>
                <td>
                    {
                        result.selectedTime.timeFromEndStop.hours + ':' + result.selectedTime.timeFromEndStop.minutes
                    }
                </td>
                <td>
                    <Button
                        data-result-name={result.name}
                        onClick={handleSaveClick}
                    >
                        <i className="fa fa-star-o"/>
                    </Button>
                </td>
                <td>
                    <Button
                        data-result-name={result.name}
                        onClick={handleShowClick}
                    >
                        <i className="fa fa-car"/>
                    </Button>
                </td>
            </tr>
    )
}