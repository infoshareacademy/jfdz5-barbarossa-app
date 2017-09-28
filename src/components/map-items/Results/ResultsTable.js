import React from 'react'
import {Button} from 'react-bootstrap'
import {ResultItem} from './ResultItem'

export const ResultsTable = ({results, saveInFavsClick, showOnMapClick, closeResults}) => {

    return (
        <div>
            <h1>Results</h1>
            <table>
                <thead>
                <tr>
                    <th>Line</th>
                    <th>Departure time</th>
                    <th>Arrival time</th>
                    <th> </th>
                    <th>
                        <Button onClick={closeResults}>
                            X
                        </Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    results.length > 0 ?
                        results.map( result =>
                            <ResultItem
                                key={result.name}
                                result={result}
                                results={results}
                                saveInFavsClick={saveInFavsClick}
                                showOnMapClick={showOnMapClick}
                            />
                        )
                        :
                        <tr>
                            <td colSpan={5}>
                                No results found
                            </td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    )
}