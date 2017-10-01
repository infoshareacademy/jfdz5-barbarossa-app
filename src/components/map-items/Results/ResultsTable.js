import React from 'react'
import {Button} from 'react-bootstrap'
import {ResultItem} from './ResultItem'

export const ResultsTable = ({results, showOnMapClick, closeResults}) => {

    return (
        <div className="results main-panel">
            <h1>Results</h1>
            <table>
                <thead>
                <tr>
                    <th>
                        <span>Line</span>
                    </th>
                    <th>
                        <span>Departure</span>
                    </th>
                    <th>
                        <span>Arrival</span>
                    </th>
                    <th> </th>
                    <th>
                            <Button className="btn-exit" onClick={closeResults}>
                                <i className="fa fa-times" aria-hidden="true"></i>
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