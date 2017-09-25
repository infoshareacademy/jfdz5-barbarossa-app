import React from 'react'
import {ResultItem} from './ResultItem'

export const ResultsTable = ({results, saveClick, showClick}) => {

    return (
        <div>
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
                                saveClick={saveClick}
                                showClick={showClick}
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