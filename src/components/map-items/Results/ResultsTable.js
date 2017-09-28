import React from 'react'
import {ResultItem} from './ResultItem'

export const ResultsTable = ({results, saveInFavsClick, showOnMapClick}) => {

    return (
        <div className="results main-panel">
            <h1>Results</h1>
            <table>
                <thead>
                <tr>
                    <th>Line</th>
                    <th>Departure time</th>
                    <th>Arrival time</th>
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